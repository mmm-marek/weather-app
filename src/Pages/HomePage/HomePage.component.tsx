import { useContext } from "react";
import ChooseSearchMethodForm from "../../Components/ChooseSearchMethodForm/ChooseSearchMethodForm.component";
import SearchByCityForm from "../../Components/SearchByCityForm/SearchByCityForm.component";
import { UserDataContext } from "../../Context/userData.context";
import SearchBy from "../../Enums/searchBy.enum";

const HomePage = () => {
    const { searchBy } = useContext(UserDataContext);

    switch (searchBy) {
        case SearchBy.Coordinates: {
            return <h1>SEARCH BY COORDINATES</h1>;
        }
        case SearchBy.City: {
            return <SearchByCityForm />;
        }
        default: {
            return <ChooseSearchMethodForm />;
        }
    }
};

export default HomePage;
