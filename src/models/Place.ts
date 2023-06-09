import {API_Place} from "../api_models";

export class Place {
    alias: string;
    id: number;
    insee: number;
    type: string;
    name: string;
    coords: { lon: number; lat: number };
    cp: number;

    constructor(response: API_Place) {
        this.alias = response["alias"];
        this.id = Number(response["id"]);
        this.insee = Number(response["insee"]);
        this.type = response["type"];
        this.name = response["real_name"];
        this.coords = {
            lat: Number(response["lat"]),
            lon: Number(response["lng"])
        }
        this.cp = Number(response["cp"]);
    }
}