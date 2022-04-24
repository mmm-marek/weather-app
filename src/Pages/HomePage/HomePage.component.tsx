import { useContext } from "react";
import ChooseSearchMethodForm from "../../Components/ChooseSearchMethodForm/ChooseSearchMethodForm.component";
import InfoPanel from "../../Components/InfoPanel/InfoPanel.component";
import SearchByCityForm from "../../Components/SearchByCityForm/SearchByCityForm.component";
import SearchByCoordinatesForm from "../../Components/SearchByCoordinatesForm/SearchByCoordinatesForm.component";
import { UserDataContext } from "../../Context/userData.context";
import SearchBy from "../../Enums/searchBy.enum";
import "./HomePage.styles.scss";

const HomePage = () => {
    const { searchBy, searchHistoryData } = useContext(UserDataContext);

    if (searchBy === SearchBy.NotChosen) {
        return <ChooseSearchMethodForm />;
    }
    return (
        <div className="homepage-container">
            {searchBy === SearchBy.City ? (
                <SearchByCityForm />
            ) : (
                <SearchByCoordinatesForm />
            )}
            {searchHistoryData.length > 0 && (
                <InfoPanel
                    dataToDisplay={
                        searchHistoryData[searchHistoryData.length - 1]
                    }
                />
            )}
        </div>
    );
};

export default HomePage;
