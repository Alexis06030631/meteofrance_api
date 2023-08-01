export class Coords {
    /**
     * Longitude of the place
     */
    lon: number;
    /**
     * Latitude of the place
     */
    lat: number;

    constructor(lon: number, lat: number) {
        this.lon = lon;
        this.lat = lat;
    }
}