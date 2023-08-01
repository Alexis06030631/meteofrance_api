import {makeIcon} from "../utils";
import {API_WeatherForecast} from "../api_models/";

export class WeatherForecast {
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
    }
    snow: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    }
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

    constructor(e: API_WeatherForecast) {
        this.time = new Date(e["time"]);
        this.temperature = e["T"];
        this.felt_temperature = e["T_windchill"];
        this.relative_humidity = e["relative_humidity"];
        this.pressure = e["P_sea"];
        this.wind_icon = makeIcon(e["wind_icon"]);
        this.wind_speed = e["wind_speed"] * 5;
        this.wind_speed_gust = e["wind_speed_gust"];
        this.wind_direction = e["wind_direction"];
        this.rain = {
            "1h": e["rain_1h"],
            "3h": e["rain_3h"],
            "6h": e["rain_6h"],
            "12h": e["rain_12h"],
            "24h": e["rain_24h"],
        }
        this.snow = {
            "1h": e["snow_1h"],
            "3h": e["snow_3h"],
            "6h": e["snow_6h"],
            "12h": e["snow_12h"],
            "24h": e["snow_24h"]
        }
        this.iso0 = e["iso0"];
        this.rain_snow_limit = e["rain_snow_limit"];
        this.total_cloud_cover = e["total_cloud_cover"];
        this.weather_icon = makeIcon(e["weather_icon"]);
        this.weather_description = e["weather_description"];
    }
}