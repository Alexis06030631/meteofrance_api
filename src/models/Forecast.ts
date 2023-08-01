import { API_Forecast } from "../api_models";
export class Forecast {
    /**
     * Time of the forecast
     */
    time: Date;
    /**
     * Rain intensity
     */
    rain_intensity: number;
    /**
     * Rain intensity description
     */
    rain_intensity_description: string;

    constructor(e: API_Forecast) {
        this.time = new Date(e["time"]);
        this.rain_intensity = e["rain_intensity"];
        this.rain_intensity_description = e["rain_intensity_description"];
    }
}