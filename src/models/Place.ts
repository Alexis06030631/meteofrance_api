import {API_Place} from "../api_models";
import {Weather} from "./Weather";
import {getNextRain, getWeather} from "../api";
import {Nowcast} from "./Nowcast";
import {Coords} from "./coords";

export class Place {
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

    constructor(response: API_Place) {
        this.insee = Number(response["insee"]);
        this.name = response["name"];
        this.coords = {
            lat: Number(response["lat"]),
            lon: Number(response["lon"])
        }
        this.department_name = response["admin"];
        this.department_code = response["admin2"];
        this.cp = Number(response["postCode"]);
        this.contry_code = response["country"];
    }

    /**
     * Get the weather for this place
     */
    async getWeather(): Promise<Weather> {
        return new Promise<Weather>((resolve, reject) => {
            getWeather(this).then((weather) => {
                return resolve(weather);
            })
        })
    }

    /**
     * Get the next rain for this place
     */
    async getNextRain(): Promise<Nowcast> {
        return new Promise<Nowcast>((resolve, reject) => {
            getNextRain(this).then((nowcast) => {
                return resolve(nowcast);
            })
        })
    }
}