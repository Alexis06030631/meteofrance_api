"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherProperties = void 0;
class WeatherProperties {
    constructor(responseElement) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.insee = Number(responseElement["insee"]);
        this.bulletin_cote = responseElement["bulletin_cote"];
    }
}
exports.WeatherProperties = WeatherProperties;
