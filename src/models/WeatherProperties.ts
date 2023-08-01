import {API_WeatherProperties} from "../api_models";

export class WeatherProperties {
    /**
     * Altitude of the place in meters
     */
    altitude: number;
    /**
     * Name of the place
     */
    name: string;
    /**
     * Country of the place
     */
    country: string;
    /**
     * Department of the place
     */
    department: number;
    /**
     * Is the rain product available for this place
     */
    rain_product_available: boolean;
    /**
     * Timezone of the place
     */
    timezone: string;
    /**
     * INSEE code of the place
     */
    insee: number;
    /**
     * Bulletin cote of the place
     */
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