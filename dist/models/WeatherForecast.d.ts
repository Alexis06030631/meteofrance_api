import { API_WeatherForecast } from "../api_models/";
export declare class WeatherForecast {
    /**
     * Time of the forecast
     */
    time: Date;
    /**
     * Temperature in °C
     */
    temperature: number;
    /**
     * Felt temperature in °C
     */
    felt_temperature: number;
    /**
     * Relative humidity in %
     */
    relative_humidity: number;
    /**
     * Pressure in hPa
     */
    pressure: number;
    /**
     * Wind icon url
     */
    wind_icon: string;
    /**
     * Wind speed in km/h
     */
    wind_speed: number;
    /**
     * Wind gust speed in km/h
     */
    wind_speed_gust: number;
    /**
     * Wind direction in °
     */
    wind_direction: number;
    rain: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    snow: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    /**
     * Iso0 in m
     */
    iso0: number;
    /**
     * Rain snow limit in m
     */
    rain_snow_limit: number;
    /**
     * Total cloud cover in %
     */
    total_cloud_cover: number;
    /**
     * Weather icon url
     */
    weather_icon: string;
    /**
     * Weather description
     */
    weather_description: string;
    constructor(e: API_WeatherForecast);
}
//# sourceMappingURL=WeatherForecast.d.ts.map