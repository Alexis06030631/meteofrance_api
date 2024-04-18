"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosMessages = void 0;
const errorCodes_1 = __importDefault(require("./errorCodes"));
const Messages = {
    [errorCodes_1.default.UnknownID]: `The ID you provided is unknown, invalid or, in some cases, the ID method is not supported.`,
    [errorCodes_1.default.PlaceNotFound]: (placeName) => `The place "${placeName}" was not found.`,
    [errorCodes_1.default.BadRequest]: (details) => `The request was malformed. Message: ${details}`,
    [errorCodes_1.default.GatewayTimeout]: `The server took too long to respond. Please try again later.`,
    [errorCodes_1.default.BadGateway]: `The server is down or unreachable. Please try again later.`,
    [errorCodes_1.default.UnrecognizedError]: (code) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${code}`,
    [errorCodes_1.default.ECONNRESET]: `The connection was reset. Please try again later.`,
    [errorCodes_1.default.ENOTFOUND]: `The server could not be found. Please check your internet connection.`
};
const AxiosMessages = {
    [errorCodes_1.default.ECONNRESET]: `The connection was reset. Please try again later.`,
    [errorCodes_1.default.ENOTFOUND]: `The server could not be found. Please check your internet connection.`
};
exports.AxiosMessages = AxiosMessages;
exports.default = Messages;
