import { API_DailyForecast, API_ProbabilityForecast, API_WeatherForecast } from "./";
export declare class API_WeatherProperties {
    altitude: number;
    name: string;
    country: string;
    french_department: string;
    rain_product_available: number;
    timezone: string;
    insee: string;
    bulletin_cote: number;
    daily_forecast: Array<API_DailyForecast>;
    forecast: Array<API_WeatherForecast>;
    probability_forecast: Array<API_ProbabilityForecast>;
}
//# sourceMappingURL=WeatherProperties.d.ts.map