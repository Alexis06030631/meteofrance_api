"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getNextRain = exports.getWeather = exports.getPlace = void 0;
const utils_1 = require("./utils");
const models = __importStar(require("./models"));
const errors_1 = require("./errors");
/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * getPlace("Paris").then(console.log)
 */
function getPlace(place) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.makeRequest)(`https://meteofrance.com/search/all?term=${place}`, {}, true).then((res) => {
            const places = [];
            res.data.forEach((place) => {
                if (place.type !== "article") {
                    places.push(new models.Place(place));
                }
            });
            return resolve(places);
        });
    }));
}
exports.getPlace = getPlace;
/**
 * Get weather from place
 * @param place - Place Name or ID (ID is better for performance)
 */
function getWeather(place) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const isPlaceId = typeof place === "number" ? true : place.match(/^[0-9]+$/) !== null;
        const placeID = isPlaceId ? place : (_b = (_a = (yield getPlace(`${place}`))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id;
        if (!placeID)
            reject(new Error("Place not found"));
        (0, utils_1.makeRequest)(`/forecast?id=${placeID}&day=0`).then((res) => {
            return resolve(new models.Weather(res.data));
        });
    }));
}
exports.getWeather = getWeather;
function getNextRain(placeName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const place = (_a = (yield getPlace(`${placeName}`))) === null || _a === void 0 ? void 0 : _a[0];
        if (!(place === null || place === void 0 ? void 0 : place.id))
            reject((0, errors_1.makeWeatherError)("PlaceNotFound", placeName));
        (0, utils_1.makeRequest)(`/nowcast/rain?lat=${place.coords.lat}&lon=${place.coords.lon}`).then((res) => {
            return resolve(new models.Nowcast(res.data));
        });
    }));
}
exports.getNextRain = getNextRain;
