"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forecast = void 0;
class Forecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.rain_intensity = e["rain_intensity"];
        this.rain_intensity_description = e["rain_intensity_description"];
    }
}
exports.Forecast = Forecast;
