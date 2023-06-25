"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyForecast = void 0;
const utils_1 = require("../utils");
class DailyForecast {
    constructor(e) {
        this.date = new Date(e["time"]).toISOString().split('T')[0];
        this.T_min = e["T_min"];
        this.T_max = e["T_max"];
        this.T_sea = e["T_sea"];
        this.relative_humidity_min = e["relative_humidity_min"];
        this.relative_humidity_max = e["relative_humidity_max"];
        this.total_precipitation_24h = e["total_precipitation_24h"];
        this.uv_index = e["uv_index"];
        this.daily_weather_icon = (0, utils_1.makeIcon)(e["daily_weather_icon"]);
        this.daily_weather_description = e["daily_weather_description"];
        this.sunrise_time = new Date(e["sunrise_time"]);
        this.sunset_time = new Date(e["sunset_time"]);
    }
}
exports.DailyForecast = DailyForecast;
