import { WeatherForecast, DailyForecast, ProbabilityForecast, WeatherProperties } from "./";
import { API_Weather } from "../api_models";
export declare class Weather {
    type: string;
    properties: WeatherProperties;
    daily_forecast: DailyForecast;
    last_update: Date;
    nowcast: WeatherForecast;
    forecast: WeatherForecast[];
    probability_forecast: ProbabilityForecast[];
    constructor(response: API_Weather);
}
//# sourceMappingURL=Weather.d.ts.map