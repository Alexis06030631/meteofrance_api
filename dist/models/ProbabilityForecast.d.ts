import { API_ProbabilityForecast } from "../api_models";
export declare class ProbabilityForecast {
    time: Date;
    rain_hazard: {
        "3h": number;
        "6h": number;
    };
    snow_hazard: {
        "3h": number;
        "6h": number;
    };
    freezing_hazard: number;
    storm_hazard: number;
    constructor(e: API_ProbabilityForecast);
}
//# sourceMappingURL=ProbabilityForecast.d.ts.map