import { Nowcast, Place, Weather } from "./models";
/**
 * Get next rain from place
 * @param place - Place Name or Place object
 * @returns A nowcast object
 */
export declare function getNextRain(place: Place | string): Promise<Nowcast>;
/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * ```javascript
 * getPlace("Paris").then(console.log)
 * ```
 */
export declare function getPlace(place: string): Promise<Array<Place>>;
/**
 * Get weather from place
 * @param place - Place Name or Place class
 */
export declare function getWeather(place: Place | string): Promise<Weather>;
//# sourceMappingURL=api.d.ts.map