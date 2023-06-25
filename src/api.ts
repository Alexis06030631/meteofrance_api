import {Nowcast, Place, Weather} from "./models"
import {makeRequest} from "./utils";
import {makeWeatherError} from "./errors";


export namespace Propreties {

    /**
     * Get next rain from place
     * @param placeName - Place Name or ID (ID is better for performance)
     * @returns A nowcast object
     */
    export function getNextRain(placeName: string): Promise<Nowcast> {
        return new Promise<Nowcast>(async (resolve, reject) => {
            const place = (await getPlace(`${placeName}`))?.[0]
            if(!place?.id) reject(makeWeatherError("PlaceNotFound", placeName));

            makeRequest(`/nowcast/rain?lat=${place.coords.lat}&lon=${place.coords.lon}`).then((res) => {
                return resolve(new Nowcast(res.data));
            })
        })
    }


    /**
     * Get place from name
     * @param place - Name of place (ex: Paris)
     * @returns An array of places
     * @example
     * ```javascript
     * getPlace("Paris").then(console.log)
     * ```
     */
    export function getPlace(place:string): Promise<Array<Place>>{
        return new Promise<Array<Place>>(async (resolve) => {
            makeRequest(`https://meteofrance.com/search/all?term=${place}`, {}, true).then((res) => {
                const places: Array<Place> = [];
                res.data.forEach((place: any) => {
                    if(place.type !== "article") {
                        places.push(new Place(place));
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
    export function getWeather(place: number | string): Promise<Weather> {
        return new Promise<Weather>(async (resolve, reject) => {
            const isPlaceId = typeof place === "number"? true: place.match(/^[0-9]+$/) !== null;
            const placeID = isPlaceId? place: (await getPlace(`${place}`))?.[0]?.id;

            if(!placeID) reject(new Error("Place not found"));

            makeRequest(`/forecast?id=${placeID}&day=0`).then((res) => {
                return resolve(new Weather(res.data));
            })
        })
    }


}
