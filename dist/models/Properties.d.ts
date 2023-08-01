import { API_Properties } from "../api_models";
export declare class Properties {
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
     * Department code of the place
     */
    department_code: string;
    /**
     * Is the rain product available for this place
     */
    rain_product_available: boolean;
    /**
     * Timezone of the place
     */
    timezone: string;
    /**
     * Indicate the confidence of the place
     */
    confidence: number;
    constructor(responseElement: API_Properties);
}
//# sourceMappingURL=Properties.d.ts.map