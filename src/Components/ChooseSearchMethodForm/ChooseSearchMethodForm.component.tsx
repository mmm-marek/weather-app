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
        <div className="search-method-form-container">
            <h3>Search by...</h3>
            <div className="methods-container">
                <button onClick={() => handleClick(SearchBy.City)}>City</button>
                <button onClick={() => handleClick(SearchBy.Coordinates)}>
                    Coordinates
                </button>
            </div>
        </div>
    );
};
export default ChooseSearchMethodForm;
