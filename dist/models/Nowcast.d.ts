import { Forecast, Properties } from "../models";
import { API_Nowcast } from "../api_models";
export declare class Nowcast {
    /**
     * The time when the weather was last updated.
     * @public
     */
    last_update: Date;
    /**
     * The type of weather.
     * @public
     */
    type: string;
    /**
     * The properties of the city where the weather is being forecasted.
     * @public
     * @readonly
     */
    properties: Properties;
    /**
     * The forecast for the next 12 hours.
     */
    forecast: Forecast[];
    constructor(response: API_Nowcast);
}
//# sourceMappingURL=Nowcast.d.ts.map