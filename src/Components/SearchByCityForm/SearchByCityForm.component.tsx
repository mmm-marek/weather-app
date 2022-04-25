import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";
import Input from "../Input/Input.component";
import { parseWeatherData } from "../../Utils/parseWeatherData";
import "./SearchByCityForm.styles.scss";

const SearchByCityForm = () => {
    const { searchBy, setSearchHistoryData, searchHistoryData } =
        useContext(UserDataContext);
    const lastSearchedCity =
        searchHistoryData.length > 0
            ? searchHistoryData[searchHistoryData.length - 1].place.city
            : "";

    const [searchField, setSearchField] = useState(lastSearchedCity);

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
            setSearchHistoryData([...searchHistoryData, weatherData]);
        } catch (e) {
            setSearchField("");
            alert("City not found.");
        }
    };

    return (
        <div className="search-by-city-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Will it rain in...
                    <Input
                        type="text"
                        name="city"
                        placeholder="London"
                        onChangeHandler={handleChange}
                        value={searchField}
                    />
                </label>
            </form>
        </div>
    );
};

export default SearchByCityForm;
