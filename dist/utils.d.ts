import { AxiosRequestConfig } from "axios/index";
/**
 * Get config from config.json
 * @param key - Key of config
 */
declare function getConfig(key?: string): any;
/**
 * Update config.json with new value
 * @param key - Key of config
 * @param value - New value of config
 */
declare function updateConfig(key: string, value: any): void;
declare function makeRequest(url: string, options?: AxiosRequestConfig, fullUrl?: boolean): Promise<any>;
declare function makeIcon(icon: string): string;
export { getConfig, updateConfig, makeRequest, makeIcon };
//# sourceMappingURL=utils.d.ts.map