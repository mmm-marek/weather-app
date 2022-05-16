import { createContext, useState } from "react";
import SearchBy from "../Enums/searchBy.enum";
import TypeOfUser from "../Enums/typeOfUser.enum";
import { WeatherData, UserDataContextType } from "../Types/userData.types";

export const UserDataContext = createContext<UserDataContextType>({
    typeOfUser: TypeOfUser.Layman,
    setTypeOfUser: () => null,
    searchBy: SearchBy.NotChosen,
    setSearchBy: () => null,
    searchHistoryData: [],
    setSearchHistoryData: () => null,
    clearSearchData: () => null,
    clearSearchHistoryData: () => null,
});

export const UserDataProvider = ({ children }: any) => {
    const [typeOfUser, setTypeOfUser] = useState(TypeOfUser.Layman);
    const [searchBy, setSearchBy] = useState(SearchBy.NotChosen);
    const [searchHistoryData, setSearchHistoryData] = useState<WeatherData[]>(
        []
    );

    const clearSearchData = () => {
        setSearchBy(SearchBy.NotChosen);
        setSearchHistoryData([]);
    };

    const clearSearchHistoryData = () => {
        setSearchHistoryData([]);
    };

    const value = {
        typeOfUser,
        setTypeOfUser,
        searchBy,
        setSearchBy,
        searchHistoryData,
        setSearchHistoryData,
        clearSearchData,
        clearSearchHistoryData,
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};
