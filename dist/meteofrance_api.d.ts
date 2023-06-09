declare class DailyForecast {
    date: string;
    T_min: number;
    T_max: number;
    T_sea: number;
    relative_humidity_min: number;
    relative_humidity_max: number;
    total_precipitation_24h: number;
    uv_index: number;
    daily_weather_icon: string;
    daily_weather_description: string;
    sunrise_time: Date;
    sunset_time: Date;
    constructor(e: respDailyForecast);
}

declare class Forecast {
    time: Date;
    T: number;
    T_windchill: number;
    relative_humidity: number;
    P_sea: number;
    wind_icon: string;
    wind_speed: number;
    wind_speed_gust: number;
    wind_direction: number;
    rain: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    snow: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_icon: string;
    weather_description: string;
    constructor(e: respForecast);
}

declare class Forecast_2 {
    time: Date;
    rain_intensity: number;
    rain_intensity_description: string;
    constructor(e: respForecast_2);
}

export declare function getNextRain(placeName: string): Promise<models.Nowcast>;

/**
 * Get place from name
 * @param place - Name of place (ex: Paris)
 * @returns An array of places
 * @example
 * getPlace("Paris").then(console.log)
 */
export declare function getPlace(place: string): Promise<Array<models.Place>>;

/**
 * Get weather from place
 * @param place - Place Name or ID (ID is better for performance)
 */
export declare function getWeather(place: number | string): Promise<models.Weather>;

declare namespace models {
    export {
        Place,
        Weather,
        Nowcast
    }
}

declare class Nowcast {
    last_update: Date;
    type: string;
    properties: Properties_2;
    forecast: Forecast_2[];
    constructor(response: respWeather_2);
}

declare class Place {
    alias: string;
    id: number;
    insee: number;
    type: string;
    name: string;
    coords: {
        lon: number;
        lat: number;
    };
    cp: number;
    constructor(response: respPlace);
}

declare class ProbabilityForecast {
    time: Date;
    rain_hazard: {
        "3h": number;
        "6h": number;
    };
    snow_hazard: {
        "3h": number;
        "6h": number;
    };
    freezing_hazard: number;
    storm_hazard: number;
    constructor(e: respProbabilityForecast);
}

declare class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    insee: number;
    bulletin_cote: number;
    constructor(responseElement: respProperties);
}

declare class Properties_2 {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    confidence: number;
    constructor(responseElement: respProperties_2);
}

declare class respDailyForecast {
    time: string;
    T_min: number;
    T_max: number;
    T_sea: number;
    relative_humidity_min: number;
    relative_humidity_max: number;
    total_precipitation_24h: number;
    uv_index: number;
    daily_weather_icon: string;
    daily_weather_description: string;
    sunrise_time: string;
    sunset_time: string;
}

declare class respForecast {
    time: string;
    T: number;
    T_windchill: number;
    relative_humidity: number;
    P_sea: number;
    wind_speed: number;
    wind_speed_gust: number;
    wind_direction: number;
    wind_icon: string;
    rain_1h: number;
    rain_3h: number;
    rain_6h: number;
    rain_12h: number;
    rain_24h: number;
    snow_1h: number;
    snow_3h: number;
    snow_6h: number;
    snow_12h: number;
    snow_24h: number;
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_icon: string;
    weather_description: string;
}

declare class respForecast_2 {
    time: string;
    rain_intensity: number;
    rain_intensity_description: string;
}

declare class respGeometry {
    type: string;
    coordinates: Array<number>;
}

declare class respGeometry_2 {
    type: string;
    coordinates: Array<number>;
}

declare class respPlace {
    alias: string;
    id: number;
    insee: number;
    type: string;
    real_name: string;
    lat: number;
    lng: number;
    cp: number;
}

declare class respProbabilityForecast {
    time: string;
    rain_hazard_3h: number;
    rain_hazard_6h: number;
    snow_hazard_3h: number;
    snow_hazard_6h: number;
    freezing_hazard: number;
    storm_hazard: number;
}

declare class respProperties {
    altitude: number;
    name: string;
    country: string;
    french_department: string;
    rain_product_available: number;
    timezone: string;
    insee: string;
    bulletin_cote: number;
    daily_forecast: Array<respDailyForecast>;
    forecast: Array<respForecast>;
    probability_forecast: Array<respProbabilityForecast>;
}

declare class respProperties_2 {
    altitude: number;
    name: string;
    country: string;
    french_department: string;
    rain_product_available: number;
    timezone: string;
    confidence: number;
    forecast: Array<respForecast_2>;
}

declare class respWeather {
    update_time: string;
    type: string;
    geometry: respGeometry;
    properties: respProperties;
}

declare class respWeather_2 {
    update_time: string;
    type: string;
    geometry: respGeometry_2;
    properties: respProperties_2;
}

declare class Weather {
    type: string;
    properties: Properties;
    daily_forecast: DailyForecast;
    last_update: Date;
    nowcast: Forecast;
    forecast: Forecast[];
    probability_forecast: ProbabilityForecast[];
    constructor(response: respWeather);
}

export { }
