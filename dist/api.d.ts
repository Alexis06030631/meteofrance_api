import { Nowcast, Place, Weather } from "./models";
export declare namespace Propreties {
    /**
     * Get next rain from place
     * @param placeName - Place Name or ID (ID is better for performance)
     * @returns A nowcast object
     */
    function getNextRain(placeName: string): Promise<Nowcast>;
    /**
     * Get place from name
     * @param place - Name of place (ex: Paris)
     * @returns An array of places
     * @example
     * ```javascript
     * getPlace("Paris").then(console.log)
     * ```
     */
    function getPlace(place: string): Promise<Array<Place>>;
    /**
     * Get weather from place
     * @param place - Place Name or ID (ID is better for performance)
     */
    function getWeather(place: number | string): Promise<Weather>;
}
//# sourceMappingURL=api.d.ts.map