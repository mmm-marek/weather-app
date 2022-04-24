import { useContext } from "react";
import { UserDataContext } from "../../Context/userData.context";
import SearchBy from "../../Enums/searchBy.enum";
import "./ChooseSearchMethodForm.styles.scss";

const ChooseSearchMethodForm = () => {
    const { setSearchBy } = useContext(UserDataContext);

    const handleClick = (searchMethod: SearchBy) => {
        setSearchBy(searchMethod);
    };

    return (
        <div className="search-method-component-container">
            <div className="methods-container">
                <button onClick={() => handleClick(SearchBy.City)}>
                    SEARCH BY CITY
                </button>
                <button onClick={() => handleClick(SearchBy.Coordinates)}>
                    SEARCH BY COORDINATES
                </button>
            </div>
        </div>
    );
};
export default ChooseSearchMethodForm;
