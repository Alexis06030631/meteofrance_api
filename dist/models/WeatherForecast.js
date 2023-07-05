"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherForecast = void 0;
const utils_1 = require("../utils");
class WeatherForecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.temperature = e["T"];
        this.felt_temperature = e["T_windchill"];
        this.relative_humidity = e["relative_humidity"];
        this.pressure = e["P_sea"];
        this.wind_icon = (0, utils_1.makeIcon)(e["wind_icon"]);
        this.wind_speed = e["wind_speed"] * 5;
        this.wind_speed_gust = e["wind_speed_gust"];
        this.wind_direction = e["wind_direction"];
        this.rain = {
            "1h": e["rain_1h"],
            "3h": e["rain_3h"],
            "6h": e["rain_6h"],
            "12h": e["rain_12h"],
            "24h": e["rain_24h"],
        };
        this.snow = {
            "1h": e["snow_1h"],
            "3h": e["snow_3h"],
            "6h": e["snow_6h"],
            "12h": e["snow_12h"],
            "24h": e["snow_24h"]
        };
        this.iso0 = e["iso0"];
        this.rain_snow_limit = e["rain_snow_limit"];
        this.total_cloud_cover = e["total_cloud_cover"];
        this.weather_icon = (0, utils_1.makeIcon)(e["weather_icon"]);
        this.weather_description = e["weather_description"];
    }
}
exports.WeatherForecast = WeatherForecast;
