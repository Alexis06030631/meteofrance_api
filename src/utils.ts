import * as fs from "fs";
import path from "path";
import axios from "axios";
import {getToken} from "./token";
import {AxiosRequestConfig} from "axios/index";
import {makeWeatherError, makeAxiosError} from "./errors";

/**
 * Get config from config.json
 * @param key - Key of config
 */
function getConfig(key?: string):any {
    const config = JSON.parse(fs.readFileSync(path.join(__dirname, "./config.json"), "utf8"));
    if(key) {
        return config[key];
    }else return config;
}

/**
 * Update config.json with new value
 * @param key - Key of config
 * @param value - New value of config
 */
function updateConfig(key: string, value: any) {
    const config = JSON.parse(fs.readFileSync(path.join(__dirname, "./config.json"), "utf8"));
    config[key] = value;
    try{
        fs.writeFileSync(path.join(__dirname, "./config.json"), JSON.stringify(config));
        if(process.env["dev_module"]) fs.writeFileSync(path.join(__dirname, "../src/config.json"), JSON.stringify(config, null, 4));
    }catch (e) {
        process.stderr.write(`Error while updating config.json: ${e.message}`);
    }
}

function makeRequest(url: string, options?: AxiosRequestConfig, fullUrl?: boolean) {
    return new Promise<any>(async (resolve, reject) => {
        if(!options) options = {};
        if (!options.headers) options.headers = {};
        options.headers["Authorization"] = `Bearer ${await getToken()}`;
        axios.get(encodeURI(`${!fullUrl? getConfig('defaultApi') + `/${url}`: `${url}`}`), options).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            if(err?.response?.statusText){
                reject(makeWeatherError(err.response.statusText.replace(/\s/g, ""), err?.response?.data?.message));
            }else reject(makeAxiosError(err.code, err.message))
        })
    })
}

function makeIcon(icon: string) {
    return `https://meteofrance.com/modules/custom/mf_tools_common_theme_public/svg/weather/${icon}.svg`;
}


export {getConfig, updateConfig, makeRequest, makeIcon};