import WeatherErrorCodes from './errorCodes';

const Messages = {
    [WeatherErrorCodes.UnknownID]: `The ID you provided is unknown, invalid or, in some cases, the ID method is not supported.`,
    [WeatherErrorCodes.PlaceNotFound]: (placeName:string) => `The place "${placeName}" was not found.`,
    [WeatherErrorCodes.BadRequest]: (details:string) => `The request was malformed. Message: ${details}`,
    [WeatherErrorCodes.GatewayTimeout]: `The server took too long to respond. Please try again later.`,
    [WeatherErrorCodes.BadGateway]: `The server is down or unreachable. Please try again later.`,

    [WeatherErrorCodes.UnrecognizedError]: (code:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${code}`,
    [WeatherErrorCodes.ECONNRESET]: `The connection was reset. Please try again later.`,
    [WeatherErrorCodes.ENOTFOUND]: `The server could not be found. Please check your internet connection.`
};

const AxiosMessages = {
    [WeatherErrorCodes.ECONNRESET]: `The connection was reset. Please try again later.`,
    [WeatherErrorCodes.ENOTFOUND]: `The server could not be found. Please check your internet connection.`
}

export default Messages;

export {AxiosMessages};