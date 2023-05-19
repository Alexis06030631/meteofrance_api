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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const config_json_1 = require("./config.json");
function getToken() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (yield requireNewToken()) {
                axios_1.default.get('https://meteofrance.com').then((res) => {
                    const newToken = decodeURIComponent((res.headers["set-cookie"][0].match(new RegExp("(^| )mfsession=([^;]+)")))[2].replace(/[a-zA-Z]/g, function (e) {
                        const t = e <= "Z" ? 65 : 97;
                        return String.fromCharCode(t + (e.charCodeAt(0) - t + 13) % 26);
                    }));
                    (0, utils_1.updateConfig)("token", newToken);
                    (0, utils_1.updateConfig)("tokenTime", Date.now());
                    return resolve(newToken);
                });
            }
            else
                return resolve((0, utils_1.getConfig)("token"));
        }));
    });
}
exports.getToken = getToken;
/**
 * Check if token is expired
 * @returns {Promise<boolean>} - True if token is expired, false if not
 */
function requireNewToken() {
    return new Promise((resolve, reject) => {
        const token = (0, utils_1.getConfig)("token");
        axios_1.default.get(encodeURI(`${config_json_1.defaultApi}`), {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 401) {
                resolve(true);
            }
            else
                resolve(false);
        }).catch((err) => {
            var _a;
            if (((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
                resolve(true);
            }
            else
                resolve(false);
        });
    });
}
