export class Nowcast {
    update: Date;
    type: string;
    properties: Properties;

    constructor(response: respWeather) {
        this.update = new Date(response["update_time"]);
        this.type = response["type"];
        this.properties = new Properties(response["properties"]);
    }
}

class Forecast {
    time: Date;
    rain_intensity: number;
    rain_intensity_description: string;

    constructor(e: respForecast) {
        this.time = new Date(e["time"]);
        this.rain_intensity = e["rain_intensity"];
        this.rain_intensity_description = e["rain_intensity_description"];
    }
}
class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    confidence: number;
    forecast: Forecast[];
    constructor(responseElement: respProperties) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.confidence = responseElement["confidence"];
        this.forecast = responseElement["forecast"].map((e) => new Forecast(e));
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
    confidence: number;
    forecast: Array<respForecast>;
}
class respForecast {
    time: string;
    rain_intensity: number;
    rain_intensity_description: string;
}