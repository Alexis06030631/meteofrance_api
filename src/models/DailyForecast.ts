import {makeIcon} from "../utils";
import {API_DailyForecast} from "../api_models";

export class DailyForecast {
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

    constructor(e: API_DailyForecast) {
        this.date = new Date(e["time"]).toISOString().split('T')[0];
        this.T_min = e["T_min"];
        this.T_max = e["T_max"];
        this.T_sea = e["T_sea"];
        this.relative_humidity_min = e["relative_humidity_min"];
        this.relative_humidity_max = e["relative_humidity_max"];
        this.total_precipitation_24h = e["total_precipitation_24h"];
        this.uv_index = e["uv_index"];
        this.daily_weather_icon = makeIcon(e["daily_weather_icon"]);
        this.daily_weather_description = e["daily_weather_description"];
        this.sunrise_time = new Date(e["sunrise_time"]);
        this.sunset_time = new Date(e["sunset_time"]);
    }

}