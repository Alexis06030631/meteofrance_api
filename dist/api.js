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
exports.getWeather = exports.getPlace = exports.getNextRain = void 0;
const models_1 = require("./models");
const utils_1 = require("./utils");
const errors_1 = require("./errors");
/**
 * Get next rain from place
 * @param place - Place Name or Place object
 * @returns A nowcast object
 */
function getNextRain(place) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const isPlaceClass = place instanceof models_1.Place;
        const placeClass = isPlaceClass ? place : (_a = (yield getPlace(`${place}`))) === null || _a === void 0 ? void 0 : _a[0];
        if (!(placeClass === null || placeClass === void 0 ? void 0 : placeClass.name))
            return reject(new errors_1.makeWeatherError("PlaceNotFound", place));
        if (place instanceof models_1.Place) {
            (0, utils_1.makeRequest)(`/nowcast/rain?lat=${place.coords.lat}&lon=${place.coords.lon}`).then((res) => {
                return resolve(new models_1.Nowcast(res.data));
            });
        }
    }));
}
exports.getNextRain = getNextRain;
/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * ```javascript
 * getPlace("Paris").then(console.log)
 * ```
 */
function getPlace(place) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.makeRequest)(`/places?q=${place}`, {}).then((res) => {
            const places = [];
            res.data.forEach((place) => {
                if (place.type !== "article") {
                    places.push(new models_1.Place(place));
                }
            });
            return resolve(places);
        });
    }));
}
exports.getPlace = getPlace;
/**
 * Get weather from place
 * @param place - Place Name or Place class
 */
function getWeather(place) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const isPlaceClass = place instanceof models_1.Place;
        const placeClass = isPlaceClass ? place : (_a = (yield getPlace(`${place}`))) === null || _a === void 0 ? void 0 : _a[0];
        if (!(placeClass === null || placeClass === void 0 ? void 0 : placeClass.name))
            return reject(new errors_1.makeWeatherError("PlaceNotFound", place));
        (0, utils_1.makeRequest)(`/forecast?lat=${placeClass.coords.lat}&lon=${placeClass.coords.lon}`).then((res) => {
            return resolve(new models_1.Weather(res.data));
        });
    }));
}
exports.getWeather = getWeather;
