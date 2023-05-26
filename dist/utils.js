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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = exports.updateConfig = exports.getConfig = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const token_1 = require("./token");
const errors_1 = require("./errors");
/**
 * Get config from config.json
 * @param {string} key - Key of config
 * @returns {any} - Value of config
 */
function getConfig(key) {
    const config = JSON.parse(fs.readFileSync(path_1.default.join(__dirname, "./config.json"), "utf8"));
    if (key) {
        return config[key];
    }
    else
        return config;
}
exports.getConfig = getConfig;
/**
 * Update config.json with new value
 * @param {string} key - Key of config
 * @param {any} value - New value of config
 * @returns {void}
 */
function updateConfig(key, value) {
    const config = JSON.parse(fs.readFileSync(path_1.default.join(__dirname, "./config.json"), "utf8"));
    config[key] = value;
    try {
        fs.writeFileSync(path_1.default.join(__dirname, "./config.json"), JSON.stringify(config));
        if (process.env["dev_module"])
            fs.writeFileSync(path_1.default.join(__dirname, "../src/config.json"), JSON.stringify(config, null, 4));
    }
    catch (e) {
        process.stderr.write(`Error while updating config.json: ${e.message}`);
    }
}
exports.updateConfig = updateConfig;
function makeRequest(url, options, fullUrl) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        if (!options)
            options = {};
        if (!options.headers)
            options.headers = {};
        options.headers["Authorization"] = `Bearer ${yield (0, token_1.getToken)()}`;
        axios_1.default.get(encodeURI(`${!fullUrl ? getConfig('defaultApi') + `/${url}` : `${url}`}`), options).then((res) => {
            resolve(res);
        }).catch((err) => {
            var _a, _b;
            reject((0, errors_1.makeAxiosError)(err.response.statusText.replace(/\s/g, ""), (_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message));
        });
    }));
}
exports.makeRequest = makeRequest;
