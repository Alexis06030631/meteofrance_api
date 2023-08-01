import {API_ProbabilityForecast} from "../api_models";

export class ProbabilityForecast {
    /**
     * Time of the forecast
     */
    time: Date;
    /**
     * Hazard probabilities
     */
    rain_hazard: {
        "3h": number;
        "6h": number;
    }
    /**
     * Hazard probabilities
     */
    snow_hazard: {
        "3h": number;
        "6h": number;
    }
    /**
     * Hazard probabilities
     */
    freezing_hazard: number;
    /**
     * Hazard probabilities
     */
    storm_hazard: number;

    constructor(e: API_ProbabilityForecast) {
        this.time = new Date(e["time"]);
        this.rain_hazard = {
            "3h": e["rain_hazard_3h"],
            "6h": e["rain_hazard_6h"],
        }
        this.snow_hazard = {
            "3h": e["snow_hazard_3h"],
            "6h": e["snow_hazard_6h"],
        }
        this.freezing_hazard = e["freezing_hazard"];
        this.storm_hazard = e["storm_hazard"];
    }
}