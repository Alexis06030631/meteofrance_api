import {makeRequest} from "./utils";
import * as models from "./models";
import {makeAxiosError} from "./errors";

/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * getPlace("Paris").then(console.log)
 */
function getPlace(place:string): Promise<Array<models.Place>>{
    return new Promise<Array<models.Place>>(async (resolve, reject) => {
        makeRequest(`https://meteofrance.com/search/all?term=${place}`, {}, true).then((res) => {
            const places: Array<models.Place> = [];
            res.data.forEach((place: any) => {
                if(place.type !== "article") {
                    places.push(new models.Place(place));
                }
            })
            return resolve(places);
        })
    })
}

/**
 * Get weather from place
 * @param place - Place Name or ID (ID is better for performance)
 */
function getWeather(place: number | string): Promise<models.Weather> {
    return new Promise<models.Weather>(async (resolve, reject) => {
        const isPlaceId = typeof place === "number"? true: place.match(/^[0-9]+$/) !== null;
        const placeID = isPlaceId? place: (await getPlace(`${place}`))[0].id;

        if(!placeID) reject(new Error("Place not found"));

        makeRequest(`/forecast?id=${placeID}&day=0`).then((res) => {
            return resolve(new models.Weather(res.data));
        })
    })
}


function getNextRain(placeName: string): Promise<models.Nowcast> {
    return new Promise<models.Nowcast>(async (resolve, reject) => {
        const place = (await getPlace(`${placeName}`))?.[0]
        if(!place?.id) reject(makeAxiosError("PlaceNotFound", placeName));

        makeRequest(`/nowcast/rain?lat=${place.coords.lat}&lon=${place.coords.lon}`).then((res) => {
            return resolve(new models.Nowcast(res.data));
        })
    })
}


export {getPlace, getWeather, getNextRain}
