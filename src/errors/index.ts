import Messages from './Messages';
import ErrorCodes from "./errorCodes";
import { AxiosMessages } from './Messages';

export function makeWeatherError (error: string, ...args: any[]) {
    const msg = (error in ErrorCodes)? Messages[error]: Messages[ErrorCodes.UnrecognizedError];

    if (typeof msg === 'function') return new Error(msg(...(args as [string])));
    if (!args?.length) return new Error(msg);
    args.unshift(msg);
    return new Error(String(...args));
}

export function makeAxiosError (code: number, message: string) {
    if (code in ErrorCodes) return new Error(AxiosMessages[code])
    else return new Error(`AxiosError: ${code} - ${message}`);
}