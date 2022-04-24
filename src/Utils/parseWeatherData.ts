import { v4 as uuid } from "uuid";

import { WeatherData } from "../Types/userData.types";

export const parseWeatherData = (responseFromServer: any): WeatherData => ({
    id: uuid(),
    humidity: responseFromServer.data.main.humidity,
    maxTemperature: responseFromServer.data.main.temp_max,
    minTemperature: responseFromServer.data.main.temp_min,
    place: {
        city: responseFromServer.data.name,
        latitude: responseFromServer.data.coord.lat,
        longitude: responseFromServer.data.coord.lon,
    },
    pressure: responseFromServer.data.main.pressure,
    temperature: responseFromServer.data.main.temp,
    windDirection: responseFromServer.data.wind.deg,
    windspeed: responseFromServer.data.wind.speed,
});
