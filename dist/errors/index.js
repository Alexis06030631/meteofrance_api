"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAxiosError = exports.makeWeatherError = void 0;
const Messages_1 = __importDefault(require("./Messages"));
const errorCodes_1 = __importDefault(require("./errorCodes"));
const Messages_2 = require("./Messages");
function makeWeatherError(error, ...args) {
    const msg = (error in errorCodes_1.default) ? Messages_1.default[error] : Messages_1.default[errorCodes_1.default.UnrecognizedError];
    if (typeof msg === 'function')
        return new Error(msg(...args));
    if (!(args === null || args === void 0 ? void 0 : args.length))
        return new Error(msg);
    args.unshift(msg);
    return new Error(String(...args));
}
exports.makeWeatherError = makeWeatherError;
function makeAxiosError(code, message) {
    if (code in errorCodes_1.default)
        return new Error(Messages_2.AxiosMessages[code]);
    else
        return new Error(`AxiosError: ${code} - ${message}`);
}
exports.makeAxiosError = makeAxiosError;
