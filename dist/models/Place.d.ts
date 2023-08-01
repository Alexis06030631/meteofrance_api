import { API_Place } from "../api_models";
import { Weather } from "./Weather";
import { Nowcast } from "./Nowcast";
export declare class Place {
    insee: number;
    name: string;
    coords: {
        lon: number;
        lat: number;
    };
    cp: number;
    department_name: string;
    department_code: string;
    contry_code: string;
    constructor(response: API_Place);
    getWeather(): Promise<Weather>;
    getNextRain(): Promise<Nowcast>;
}
//# sourceMappingURL=Place.d.ts.map