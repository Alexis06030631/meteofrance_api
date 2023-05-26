import WeatherErrorCodes from './errorCodes';

const Messages = {
    [WeatherErrorCodes.UnknownID]: `The ID you provided is unknown, invalid or, in some cases, the ID method is not supported.`,
    [WeatherErrorCodes.PlaceNotFound]: (placeName:string) => `The place "${placeName}" was not found.`,
    [WeatherErrorCodes.BadRequest]: (details:string) => `The request was malformed. Message: ${details}`,


    [WeatherErrorCodes.UnrecognizedError]: (code:any) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${code}`
};

export default Messages;