import { createContext, useState } from "react";
import SearchBy from "../Enums/searchBy.enum";
import TypeOfUser from "../Enums/typeOfUser.enum";
import {
    DataForLayman,
    DataForMeteorologist,
    UserDataContextType,
} from "../Types/userData.types";

export const UserDataContext = createContext<UserDataContextType>({
    typeOfUser: TypeOfUser.Layman,
    setTypeOfUser: () => null,
    searchBy: SearchBy.NotChosen,
    setSearchBy: () => null,
    searchHistoryData: [],
    setSearchHistoryData: () => null,
    clearSearchData: () => null,
});

export const UserDataProvider = ({ children }: any) => {
    const [typeOfUser, setTypeOfUser] = useState(TypeOfUser.Layman);
    const [searchBy, setSearchBy] = useState(SearchBy.NotChosen);
    const [searchHistoryData, setSearchHistoryData] = useState<
        DataForLayman[] | DataForMeteorologist[]
    >([]);

    const clearSearchData = () => {
        setSearchBy(SearchBy.NotChosen);
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
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};
