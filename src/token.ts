import axios from 'axios';
import { getConfig, updateConfig } from "./utils";
import { defaultApi } from "./config.json";

async function getToken() {
    return new Promise<string>(async (resolve, reject) => {
        if (await requireNewToken()) {
            axios.get('https://meteofrance.com').then((res) => {
                const newToken = decodeURIComponent((res.headers["set-cookie"][0].match(new RegExp("(^| )mfsession=([^;]+)")))[2].replace(/[a-zA-Z]/g, function (e) {
                    const t = e <= "Z" ? 65 : 97;
                    return String.fromCharCode(t + (e.charCodeAt(0) - t + 13) % 26)
                }))
                updateConfig("token", newToken);
                updateConfig("tokenTime", Date.now());
                return resolve(newToken);
            })
        } else return resolve(getConfig("token"));
    })
}

/**
 * Check if token is expired
 * @returns {Promise<boolean>} - True if token is expired, false if not
 */
function requireNewToken() {
  return new Promise<boolean>((resolve, reject) => {
    const token = getConfig("token");
    axios.get(encodeURI(`${defaultApi}`), {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        if(res.status === 401) {
            resolve(true);
        }else resolve(false);
    }).catch((err) => {
        if(err?.response?.status === 401) {
            resolve(true);
        }else resolve(false);
    })
  });
}

export { getToken };