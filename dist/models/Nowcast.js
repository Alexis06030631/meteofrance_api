"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nowcast = void 0;
const models_1 = require("../models");
class Nowcast {
    constructor(response) {
        this.type = response["type"];
        this.properties = new models_1.Properties(response["properties"]);
        this.forecast = response["properties"]["forecast"].map((e) => new models_1.Forecast(e));
        this.last_update = new Date(response["update_time"]);
    }
}
exports.Nowcast = Nowcast;
