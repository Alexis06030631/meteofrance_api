"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const _1 = require("./");
class Weather {
    constructor(response) {
        var _a;
        this.type = response["type"];
        this.properties = new _1.WeatherProperties(response["properties"]);
        this.daily_forecast = response["properties"]["daily_forecast"].map((e) => new _1.DailyForecast(e))[0];
        this.nowcast = response["properties"]["forecast"].filter((e) => new Date(e["time"]).getTime() <= new Date().getTime()).map((e) => new _1.WeatherForecast(e)).pop();
        this.forecast = response["properties"]["forecast"].map((e) => new _1.WeatherForecast(e));
        this.probability_forecast = (_a = response["properties"]["probability_forecast"]) === null || _a === void 0 ? void 0 : _a.map((e) => new _1.ProbabilityForecast(e));
        this.last_update = new Date(response["update_time"]);
    }
}
exports.Weather = Weather;
