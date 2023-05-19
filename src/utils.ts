import * as fs from "fs";
import path from "path";
import axios, {AxiosInterceptorOptions} from "axios";
import {getToken} from "./token";
import {AxiosRequestConfig} from "axios/index";
import {makeAxiosError} from "./errors";

/**
 * Get config from config.json
 * @param {string} key - Key of config
 * @returns {any} - Value of config
 */
function getConfig(key?: string) {
    const config = JSON.parse(fs.readFileSync(path.join(__dirname, "./config.json"), "utf8"));
    if(key) {
        return config[key];
    }else return config;
}

/**
 * Update config.json with new value
 * @param {string} key - Key of config
 * @param {any} value - New value of config
 * @returns {void}
 */
function updateConfig(key: string, value: any) {
    const config = JSON.parse(fs.readFileSync(path.join(__dirname, "./config.json"), "utf8"));
    config[key] = value;
    fs.writeFileSync(path.join(__dirname, "./config.json"), JSON.stringify(config));
    if(process.env["dev_module"]) fs.writeFileSync(path.join(__dirname, "../src/config.json"), JSON.stringify(config, null, 4));
}

function makeRequest(url: string, options?: AxiosRequestConfig, fullUrl?: boolean) {
    return new Promise<any>(async (resolve, reject) => {
        if(!options) options = {};
        if (!options.headers) options.headers = {};
        options.headers["Authorization"] = `Bearer ${await getToken()}`;
        axios.get(encodeURI(`${!fullUrl? getConfig('defaultApi') + `/${url}`: `${url}`}`), options).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(makeAxiosError(err.response.statusText.replace(/\s/g, ""), err?.response?.data?.message));
        })
    })
}


export {getConfig, updateConfig, makeRequest};