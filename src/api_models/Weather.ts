import {API_WeatherProperties, API_Geometry} from "./";

export class API_Weather {
    update_time: string;
    type: string;
    geometry: API_Geometry;
    properties: API_WeatherProperties;
}