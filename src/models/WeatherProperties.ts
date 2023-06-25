import {API_WeatherProperties} from "../api_models";

export class WeatherProperties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    insee: number;
    bulletin_cote: number;
    constructor(responseElement: API_WeatherProperties) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.insee = Number(responseElement["insee"]);
        this.bulletin_cote = responseElement["bulletin_cote"];
    }
}