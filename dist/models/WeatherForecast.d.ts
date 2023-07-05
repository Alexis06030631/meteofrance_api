import { API_WeatherForecast } from "../api_models/";
export declare class WeatherForecast {
    time: Date;
    temperature: number;
    felt_temperature: number;
    relative_humidity: number;
    pressure: number;
    wind_icon: string;
    wind_speed: number;
    wind_speed_gust: number;
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
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_icon: string;
    weather_description: string;
    constructor(e: API_WeatherForecast);
}
//# sourceMappingURL=WeatherForecast.d.ts.map