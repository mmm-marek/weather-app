import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";
import Input from "../Input/Input.component";
import { parseWeatherData } from "../../Utils/parseWeatherData";

const SearchByCityForm = () => {
    const [searchField, setSearchField] = useState("");
    const { searchBy } = useContext(UserDataContext);

    const handleChange = (e: any) => {
        setSearchField(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let response = await getDataFromOpenWeatherAPI(searchBy, {
                place: searchField,
            });
            const weatherData = parseWeatherData(response);
            console.log(weatherData);
            console.log(response);
        } catch (e) {
            setSearchField("");
            alert("City not found.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Will it rain in...
                    <Input
                        type="text"
                        name="city"
                        placeholder="city"
                        onChangeHandler={handleChange}
                        value={searchField}
                    />
                </label>
            </form>
        </div>
    );
};

export default SearchByCityForm;
