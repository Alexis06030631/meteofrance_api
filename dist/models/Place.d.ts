import { API_Place } from "../api_models";
export declare class Place {
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
    constructor(response: API_Place);
}
//# sourceMappingURL=Place.d.ts.map