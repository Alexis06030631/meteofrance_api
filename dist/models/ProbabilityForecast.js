"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProbabilityForecast = void 0;
class ProbabilityForecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.rain_hazard = {
            "3h": e["rain_hazard_3h"],
            "6h": e["rain_hazard_6h"],
        };
        this.snow_hazard = {
            "3h": e["snow_hazard_3h"],
            "6h": e["snow_hazard_6h"],
        };
        this.freezing_hazard = e["freezing_hazard"];
        this.storm_hazard = e["storm_hazard"];
    }
}
exports.ProbabilityForecast = ProbabilityForecast;
