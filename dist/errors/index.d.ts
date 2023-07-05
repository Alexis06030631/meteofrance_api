import Messages from './Messages';
import ErrorCodes from "./errorCodes";
import { AxiosMessages } from './Messages';
export { ErrorCodes, Messages, AxiosMessages };
export declare class makeWeatherError extends Error {
    code: string | number;
    constructor(error: string, ...args: any[]);
    get name(): string;
}
export declare function makeAxiosError(code: number, message: string): void;
//# sourceMappingURL=index.d.ts.map