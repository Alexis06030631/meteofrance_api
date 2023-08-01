"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const api_1 = require("../api");
class Place {
    constructor(response) {
        this.insee = Number(response["insee"]);
        this.name = response["name"];
        this.coords = {
            lat: Number(response["lat"]),
            lon: Number(response["lon"])
        };
        this.department_name = response["admin"];
        this.department_code = response["admin2"];
        this.cp = Number(response["postCode"]);
        this.contry_code = response["country"];
    }
    getWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, api_1.getWeather)(this).then((weather) => {
                    return resolve(weather);
                });
            });
        });
    }
    getNextRain() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, api_1.getNextRain)(this).then((nowcast) => {
                    return resolve(nowcast);
                });
            });
        });
    }
}
exports.Place = Place;
