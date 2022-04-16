export interface Coordinates {
    longitude: string;
    latitude: string;
}

export interface QueryData {
    place: string | Coordinates;
}
