import { AxiosRequestConfig } from "axios/index";
/**
 * Get config from config.json
 * @param {string} key - Key of config
 * @returns {any} - Value of config
 */
declare function getConfig(key?: string): any;
/**
 * Update config.json with new value
 * @param {string} key - Key of config
 * @param {any} value - New value of config
 * @returns {void}
 */
declare function updateConfig(key: string, value: any): void;
declare function makeRequest(url: string, options?: AxiosRequestConfig, fullUrl?: boolean): Promise<any>;
export { getConfig, updateConfig, makeRequest };
