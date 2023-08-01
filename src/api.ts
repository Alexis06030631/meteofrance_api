import {Nowcast, Place, Weather} from "./models"
import {makeRequest} from "./utils";
import {makeWeatherError} from "./errors";

    /**
     * Get next rain from place
     * @param place - Place Name or Place object
     * @returns A nowcast object
     */
    export function getNextRain(place: Place|string): Promise<Nowcast> {
        return new Promise<Nowcast>(async (resolve, reject) => {
            const isPlaceClass = place instanceof Place;
            const placeClass = isPlaceClass? place: (await getPlace(`${place}`))?.[0]

            if(!placeClass?.name) return reject(new makeWeatherError("PlaceNotFound", place));

            if (place instanceof Place) {
                makeRequest(`/nowcast/rain?lat=${place.coords.lat}&lon=${place.coords.lon}`).then((res) => {
                    return resolve(new Nowcast(res.data));
                })
            }
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
            makeRequest(`/places?q=${place}`, {}).then((res) => {
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
     * @param place - Place Name or Place class
     */
    export function getWeather(place:Place|string): Promise<Weather> {
        return new Promise<Weather>(async (resolve, reject) => {
            const isPlaceClass = place instanceof Place;
            const placeClass = isPlaceClass? place: (await getPlace(`${place}`))?.[0]

            if(!placeClass?.name) return reject(new makeWeatherError("PlaceNotFound", place));

            makeRequest(`/forecast?lat=${placeClass.coords.lat}&lon=${placeClass.coords.lon}`).then((res) => {
                return resolve(new Weather(res.data));
            })
        })
    }
