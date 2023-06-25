import {API_Forecast} from "./";

export class API_Properties {
    altitude: number;
    name: string;
    country: string;
    french_department: string;
    rain_product_available: number;
    timezone: string;
    confidence: number;
    forecast: Array<API_Forecast>;
}