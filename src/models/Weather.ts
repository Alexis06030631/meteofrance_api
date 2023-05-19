export class Weather {
    update: Date;
    type: string;
    properties: Properties;

    constructor(response: respWeather) {
        this.update = new Date(response["update_time"]);
        this.type = response["type"];
        this.properties = new Properties(response["properties"]);
    }
}

class DailyForecast {
    time: Date;
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

    constructor(e: respDailyForecast) {
        this.time = new Date(e["time"]);
        this.T_min = e["T_min"];
        this.T_max = e["T_max"];
        this.T_sea = e["T_sea"];
        this.relative_humidity_min = e["relative_humidity_min"];
        this.relative_humidity_max = e["relative_humidity_max"];
        this.total_precipitation_24h = e["total_precipitation_24h"];
        this.uv_index = e["uv_index"];
        this.daily_weather_icon = e["daily_weather_icon"];
        this.daily_weather_description = e["daily_weather_description"];
        this.sunrise_time = new Date(e["sunrise_time"]);
        this.sunset_time = new Date(e["sunset_time"]);
    }

}

class Forecast {
    time: Date;
    T: number;
    T_windchill: number;
    relative_humidity: number;
    P_sea: number;
    wind_speed: number;
    wind_speed_gust: number;
    wind_direction: number;
    rain: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    }
    snow: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    }
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_description: string;

    constructor(e: respForecast) {
        this.time = new Date(e["time"]);
        this.T = e["T"];
        this.T_windchill = e["T_windchill"];
        this.relative_humidity = e["relative_humidity"];
        this.P_sea = e["P_sea"];
        this.wind_speed = e["wind_speed"];
        this.wind_speed_gust = e["wind_speed_gust"];
        this.wind_direction = e["wind_direction"];
        this.rain = {
            "1h": e["rain_1h"],
            "3h": e["rain_3h"],
            "6h": e["rain_6h"],
            "12h": e["rain_12h"],
            "24h": e["rain_24h"],
        }
        this.snow = {
            "1h": e["snow_1h"],
            "3h": e["snow_3h"],
            "6h": e["snow_6h"],
            "12h": e["snow_12h"],
            "24h": e["snow_24h"]
        }
        this.iso0 = e["iso0"];
        this.rain_snow_limit = e["rain_snow_limit"];
        this.total_cloud_cover = e["total_cloud_cover"];
        this.weather_description = e["weather_description"];
    }
}

class ProbabilityForecast {
    time: Date;
    rain_hazard: {
        "3h": number;
        "6h": number;
    }
    snow_hazard: {
        "3h": number;
        "6h": number;
    }
    freezing_hazard: number;
    storm_hazard: number;

    constructor(e: respProbabilityForecast) {
        this.time = new Date(e["time"]);
        this.rain_hazard = {
            "3h": e["rain_hazard_3h"],
            "6h": e["rain_hazard_6h"],
        }
        this.snow_hazard = {
            "3h": e["snow_hazard_3h"],
            "6h": e["snow_hazard_6h"],
        }
        this.freezing_hazard = e["freezing_hazard"];
        this.storm_hazard = e["storm_hazard"];
    }
}

class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    insee: number;
    bulletin_cote: number;
    daily_forecast: DailyForecast[];
    forecast: Forecast[];
    probability_forecast: ProbabilityForecast[];
    constructor(responseElement: respProperties) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.insee = Number(responseElement["insee"]);
        this.bulletin_cote = responseElement["bulletin_cote"];
        this.daily_forecast = responseElement["daily_forecast"].map((e) => new DailyForecast(e));
        this.forecast = responseElement["forecast"].map((e) => new Forecast(e));
        this.probability_forecast = responseElement["probability_forecast"].map((e) => new ProbabilityForecast(e));
    }
}

class respWeather {
    update_time: string;
    type: string;
    geometry: respGeometry;
    properties: respProperties;
}
class respGeometry {
    type: string;
    coordinates: Array<number>;
}
class respProperties {
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
class respDailyForecast {
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
class respForecast {
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
class respProbabilityForecast {
    time: string;
    rain_hazard_3h: number;
    rain_hazard_6h: number;
    snow_hazard_3h: number;
    snow_hazard_6h: number;
    freezing_hazard: number;
    storm_hazard: number;
}