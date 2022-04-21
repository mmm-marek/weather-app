import { useContext } from "react";
import ChooseSearchMethodForm from "../../Components/ChooseSearchMethodForm/ChooseSearchMethodForm.component";
import SearchByCityForm from "../../Components/SearchByCityForm/SearchByCityForm.component";
import SearchByCoordinatesForm from "../../Components/SearchByCoordinatesForm/SearchByCoordinatesForm.component";
import { UserDataContext } from "../../Context/userData.context";
import SearchBy from "../../Enums/searchBy.enum";

const HomePage = () => {
    const { searchBy } = useContext(UserDataContext);

    switch (searchBy) {
        case SearchBy.Coordinates: {
            return (
                <div>
                    <SearchByCoordinatesForm />
                </div>
            );
        }
        case SearchBy.City: {
            return (
                <div>
                    <SearchByCityForm />
                </div>
            );
        }
        default: {
            return <ChooseSearchMethodForm />;
        }
    }
};

export default HomePage;
