export interface Coordinates {
    longitude: string;
    latitude: string;
}

/* Place can be either a city, which is a string or a set of coordinates */
export interface QueryData {
    place: string | Coordinates;
}
