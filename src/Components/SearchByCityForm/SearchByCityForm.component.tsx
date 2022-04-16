import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";

const SearchByCityForm = () => {
    const [searchField, setSearchField] = useState("");
    const { searchBy } = useContext(UserDataContext);

    const handleChange = (e: any) => {
        setSearchField(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let response = await getDataFromOpenWeatherAPI(searchBy, {
            place: searchField,
        });
        console.log(response);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Will it rain in...
                    <input type="text" name="city" onChange={handleChange} />
                </label>
            </form>
        </div>
    );
};

export default SearchByCityForm;
