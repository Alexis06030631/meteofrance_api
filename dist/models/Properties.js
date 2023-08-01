"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
class Properties {
    constructor(responseElement) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department_code = responseElement["french_department"];
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.confidence = responseElement["confidence"];
    }
}
exports.Properties = Properties;
