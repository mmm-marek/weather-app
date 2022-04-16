import SearchBy from "../Enums/searchBy.enum";
import { Coordinates, QueryData } from "../Types/openWeatherQueries.types";
const axios = require("axios").default;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const generateQueryString = (searchBy: SearchBy, queryData: QueryData) => {
    if (searchBy === SearchBy.City) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${queryData.place}&appid=${API_KEY}&units=metric`;
    }
    const { latitude, longitude } = queryData.place as Coordinates;
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
};

const queryWeatherAPI = (queryString: string) => {
    let response = axios
        .get(queryString)
        .then((response: any) => {
            // handle success
            return response;
        })
        .catch((error: any) => {
            // handle error
            console.log(error);
        });
    return response;
};

export const getDataFromOpenWeatherAPI = (
    searchBy: SearchBy,
    queryData: QueryData
) => {
    const queryString = generateQueryString(searchBy, queryData);
    return queryWeatherAPI(queryString);
};
