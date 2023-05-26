import * as models from "./models";
/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * getPlace("Paris").then(console.log)
 */
declare function getPlace(place: string): Promise<Array<models.Place>>;
/**
 * Get weather from place
 * @param place - Place Name or ID (ID is better for performance)
 */
declare function getWeather(place: number | string): Promise<models.Weather>;
declare function getNextRain(placeName: string): Promise<models.Nowcast>;
export { getPlace, getWeather, getNextRain };
