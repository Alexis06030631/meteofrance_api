import { API_WeatherProperties } from "../api_models";
export declare class WeatherProperties {
    /**
     * Altitude of the place in meters
     */
    altitude: number;
    /**
     * Name of the place
     */
    name: string;
    /**
     * Country of the place
     */
    country: string;
    /**
     * Department of the place
     */
    department: number;
    /**
     * Is the rain product available for this place
     */
    rain_product_available: boolean;
    /**
     * Timezone of the place
     */
    timezone: string;
    /**
     * INSEE code of the place
     */
    insee: number;
    /**
     * Bulletin cote of the place
     */
    bulletin_cote: number;
    constructor(responseElement: API_WeatherProperties);
}
//# sourceMappingURL=WeatherProperties.d.ts.map