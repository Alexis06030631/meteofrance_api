import {API_Place} from "../api_models";
import {Weather} from "./Weather";
import {makeRequest} from "../utils";
import {getNextRain, getWeather} from "../api";
import {Nowcast} from "./Nowcast";

export class Place {
    insee: number;
    name: string;
    coords: { lon: number; lat: number };
    cp: number;
    department_name: string;
    department_code: string;
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

    async getWeather(): Promise<Weather> {
        return new Promise<Weather>((resolve, reject) => {
            getWeather(this).then((weather) => {
                return resolve(weather);
            })
        })
    }

    async getNextRain(): Promise<Nowcast> {
        return new Promise<Nowcast>((resolve, reject) => {
            getNextRain(this).then((nowcast) => {
                return resolve(nowcast);
            })
        })
    }
}