import {API_ProbabilityForecast} from "../api_models";

export class ProbabilityForecast {
    time: Date;
    rain_hazard: {
        "3h": number;
        "6h": number;
    }
    snow_hazard: {
        "3h": number;
        "6h": number;
    }
    freezing_hazard: number;
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