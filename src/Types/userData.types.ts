import SearchBy from "../Enums/searchBy.enum";
import TypeOfUser from "../Enums/typeOfUser.enum";

export interface PlaceData {
    longitude: string | null;
    latitude: string | null;
    city: string | null;
}

export interface DataForLayman {
    id: string;
    place: PlaceData;
    temperature: string;
    windspeed: string;
    humidity: string;
    pressure: string;
}

export interface DataForMeteorologist {
    laymanData: DataForLayman;
    windDirection: string;
    minTemperature: string;
    maxTemperature: string;
}

export type UserDataContextType = {
    typeOfUser: TypeOfUser;
    searchBy: SearchBy;
    searchHistoryData: DataForMeteorologist[] | DataForLayman[];
    setTypeOfUser: React.Dispatch<React.SetStateAction<TypeOfUser>>;
    setSearchBy: React.Dispatch<React.SetStateAction<SearchBy>>;
    setSearchHistoryData: React.Dispatch<
        React.SetStateAction<DataForLayman[] | DataForMeteorologist[]>
    >;
    clearSearchData: () => void;
};
