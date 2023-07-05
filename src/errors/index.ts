import Messages from './Messages';
import ErrorCodes from "./errorCodes";
import { AxiosMessages } from './Messages';

export {
    ErrorCodes,
    Messages,
    AxiosMessages
}

export class makeWeatherError extends Error {
    code: string | number;
    constructor (error: string, ...args: any[]) {
        super(message(error, args));
        this.code = error;
        Error.captureStackTrace?.(this, makeWeatherError);
    }

    get name() {
        return `${super.name} [${this.code}]`;
    }
}

export function makeAxiosError (code: number, message: string) {
    if (code in ErrorCodes) throw new Error(AxiosMessages[code])
    else throw new Error(`AxiosError: ${code} - ${message}`);
}

/**
 * Format the message for an error.
 * @param {string} error The error code
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */
function message (error: string|number, ...args: any[]) {
    if(typeof error === 'string') error = error.replace(/\s/g, "").replace(/-/g, "")
    const msg = (error in ErrorCodes)? Messages[error]: Messages[ErrorCodes.UnrecognizedError];
    if (typeof msg === 'function') return msg(...(args as [string]));
    if (!args?.length) return msg;
    args.unshift(msg);
    return String(...args);
}