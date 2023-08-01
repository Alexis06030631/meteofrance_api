import { API_DailyForecast } from "../api_models";
export declare class DailyForecast {
    /**
     * Date of the forecast
     */
    date: string;
    /**
     * Minimum temperature in °C
     */
    T_min: number;
    /**
     * Maximum temperature in °C
     */
    T_max: number;
    /**
     * Sea temperature in °C
     */
    T_sea: number;
    /**
     * Minimum relative humidity in %
     */
    relative_humidity_min: number;
    /**
     * Maximum relative humidity in %
     */
    relative_humidity_max: number;
    /**
     * Total precipitation in mm for the next 24 hours
     */
    total_precipitation_24h: number;
    /**
     * UV index
     */
    uv_index: number;
    /**
     * Weather icon url
     */
    daily_weather_icon: string;
    /**
     * Weather description
     */
    daily_weather_description: string;
    /**
     * Sunrise time
     */
    sunrise_time: Date;
    /**
     * Sunset time
     */
    sunset_time: Date;
    constructor(e: API_DailyForecast);
}
//# sourceMappingURL=DailyForecast.d.ts.map