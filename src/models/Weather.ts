import {WeatherForecast, DailyForecast, ProbabilityForecast, Properties, WeatherProperties} from "./";
import {API_Weather, API_WeatherForecast} from "../api_models";

export class Weather {
    type: string;
    properties: WeatherProperties;
    daily_forecast: DailyForecast;
    last_update: Date;
    nowcast: WeatherForecast;
    forecast: WeatherForecast[];
    probability_forecast: ProbabilityForecast[];

    constructor(response: API_Weather) {
        this.type = response["type"];
        this.properties = new WeatherProperties(response["properties"]);

        this.daily_forecast = response["properties"]["daily_forecast"].map((e) => new DailyForecast(e))[0];
        this.nowcast = response["properties"]["forecast"].filter((e) => new Date(e["time"]).getTime() <= new Date().getTime()).map((e) => new WeatherForecast(e)).pop();
        this.forecast = response["properties"]["forecast"].map((e) => new WeatherForecast(e));
        this.probability_forecast = response["properties"]["probability_forecast"].map((e) => new ProbabilityForecast(e));
        this.last_update = new Date(response["update_time"]);
    }
}