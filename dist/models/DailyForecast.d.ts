import { API_DailyForecast } from "../api_models";
export declare class DailyForecast {
    date: string;
    T_min: number;
    T_max: number;
    T_sea: number;
    relative_humidity_min: number;
    relative_humidity_max: number;
    total_precipitation_24h: number;
    uv_index: number;
    daily_weather_icon: string;
    daily_weather_description: string;
    sunrise_time: Date;
    sunset_time: Date;
    constructor(e: API_DailyForecast);
}
//# sourceMappingURL=DailyForecast.d.ts.map