import { API_ProbabilityForecast } from "../api_models";
export declare class ProbabilityForecast {
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
    };
    /**
     * Hazard probabilities
     */
    snow_hazard: {
        "3h": number;
        "6h": number;
    };
    /**
     * Hazard probabilities
     */
    freezing_hazard: number;
    /**
     * Hazard probabilities
     */
    storm_hazard: number;
    constructor(e: API_ProbabilityForecast);
}
//# sourceMappingURL=ProbabilityForecast.d.ts.map