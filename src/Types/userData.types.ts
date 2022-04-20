import SearchBy from "../Enums/searchBy.enum";
import TypeOfUser from "../Enums/typeOfUser.enum";

export interface PlaceData {
    longitude: string;
    latitude: string;
    city: string;
}

export interface WeatherData {
    id: string;
    place: PlaceData;
    temperature: string;
    windspeed: string;
    humidity: string;
    pressure: string;
    windDirection: string;
    minTemperature: string;
    maxTemperature: string;
}

export type UserDataContextType = {
    typeOfUser: TypeOfUser;
    searchBy: SearchBy;
    searchHistoryData: WeatherData[];
    setTypeOfUser: React.Dispatch<React.SetStateAction<TypeOfUser>>;
    setSearchBy: React.Dispatch<React.SetStateAction<SearchBy>>;
    setSearchHistoryData: React.Dispatch<React.SetStateAction<WeatherData[]>>;
    clearSearchData: () => void;
};
