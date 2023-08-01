import { API_Place } from "../api_models";
import { Weather } from "./Weather";
import { Nowcast } from "./Nowcast";
import { Coords } from "./coords";
export declare class Place {
    /**
     * Insee code of the place
     */
    insee: number;
    /**
     * Name of the place or the city
     */
    name: string;
    /**
     * Coordinates of the place
     */
    coords: Coords;
    /**
     * Postal code of the place
     */
    cp: number;
    /**
     * Name of the department
     */
    department_name: string;
    /**
     * Code of the department
     */
    department_code: string;
    /**
     * Code of the country (FR)
     */
    contry_code: string;
    constructor(response: API_Place);
    /**
     * Get the weather for this place
     */
    getWeather(): Promise<Weather>;
    /**
     * Get the next rain for this place
     */
    getNextRain(): Promise<Nowcast>;
}
//# sourceMappingURL=Place.d.ts.map