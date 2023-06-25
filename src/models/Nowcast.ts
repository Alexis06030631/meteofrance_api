import { Forecast, Properties } from "../models";
import { API_Nowcast } from "../api_models";
export class Nowcast {
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

    constructor(response: API_Nowcast) {
        this.type = response["type"];
        this.properties = new Properties(response["properties"]);
        this.forecast = response["properties"]["forecast"].map((e) => new Forecast(e));
        this.last_update = new Date(response["update_time"]);
    }
}
