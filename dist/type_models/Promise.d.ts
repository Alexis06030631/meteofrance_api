/**
 * Promise type
 * @example
 * const promise: Promise<string> = new Promise((resolve) => {
 *    resolve("Hello World");
 *    // or
 *    reject(new Error("Hello World"));
 *    });
 * @
 */
export type Promise<T> = {
    then: (callback: (value: T) => void) => void;
    catch: (callback: (error: Error) => void) => void;
    finally: (callback: () => void) => void;
};
//# sourceMappingURL=Promise.d.ts.map