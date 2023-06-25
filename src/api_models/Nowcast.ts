import {API_Geometry, API_Properties} from "./";

export class API_Nowcast {
    update_time: string;
    type: string;
    geometry: API_Geometry;
    properties: API_Properties;
}