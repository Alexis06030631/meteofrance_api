"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAxiosError = exports.makeWeatherError = exports.AxiosMessages = exports.Messages = exports.ErrorCodes = void 0;
const Messages_1 = __importDefault(require("./Messages"));
exports.Messages = Messages_1.default;
const errorCodes_1 = __importDefault(require("./errorCodes"));
exports.ErrorCodes = errorCodes_1.default;
const Messages_2 = require("./Messages");
Object.defineProperty(exports, "AxiosMessages", { enumerable: true, get: function () { return Messages_2.AxiosMessages; } });
class makeWeatherError extends Error {
    constructor(error, ...args) {
        var _a;
        super(message(error, args));
        this.code = error;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, makeWeatherError);
    }
    get name() {
        return `${super.name} [${this.code}]`;
    }
}
exports.makeWeatherError = makeWeatherError;
function makeAxiosError(code, message) {
    if (code in errorCodes_1.default)
        throw new Error(Messages_2.AxiosMessages[code]);
    else
        throw new Error(`AxiosError: ${code} - ${message}`);
}
exports.makeAxiosError = makeAxiosError;
/**
 * Format the message for an error.
 * @param {string} error The error code
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */
function message(error, ...args) {
    if (typeof error === 'string')
        error = error.replace(/\s/g, "").replace(/-/g, "");
    const msg = (error in errorCodes_1.default) ? Messages_1.default[error] : Messages_1.default[errorCodes_1.default.UnrecognizedError];
    if (typeof msg === 'function')
        return msg(...args);
    if (!(args === null || args === void 0 ? void 0 : args.length))
        return msg;
    args.unshift(msg);
    return String(...args);
}
