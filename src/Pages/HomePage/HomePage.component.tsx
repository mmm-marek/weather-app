import { useContext } from "react";
import ChooseSearchMethodForm from "../../Components/ChooseSearchMethodForm/ChooseSearchMethodForm.component";
import InfoBanner from "../../Components/InfoBanner/InfoBanner.component";
import InfoPanel from "../../Components/InfoPanel/InfoPanel.component";
import SearchByCityForm from "../../Components/SearchByCityForm/SearchByCityForm.component";
import SearchByCoordinatesForm from "../../Components/SearchByCoordinatesForm/SearchByCoordinatesForm.component";
import { UserDataContext } from "../../Context/userData.context";
import SearchBy from "../../Enums/searchBy.enum";
import "./HomePage.styles.scss";

const HomePage = () => {
    const { searchBy, searchHistoryData } = useContext(UserDataContext);
    const lastSearch =
        searchHistoryData.length > 0
            ? searchHistoryData[searchHistoryData.length - 1]
            : null;

    if (searchBy === SearchBy.NotChosen) {
        return <ChooseSearchMethodForm />;
    }
    return (
        <div className="homepage-container">
            <div className="info-banner">
                {lastSearch !== null && (
                    <InfoBanner
                        temperature={lastSearch.temperature}
                        description={lastSearch.description}
                        city={lastSearch.place.city}
                    />
                )}
            </div>
            <div className="content-container">
                {searchBy === SearchBy.City ? (
                    <SearchByCityForm />
                ) : (
                    <SearchByCoordinatesForm />
                )}
                <div className="info-panel-container">
                    {lastSearch !== null && (
                        <InfoPanel dataToDisplay={lastSearch} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
