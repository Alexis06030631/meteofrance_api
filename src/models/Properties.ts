import {API_Properties} from "../api_models";

export class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    confidence: number;
    constructor(responseElement: API_Properties) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.confidence = responseElement["confidence"];
    }
}