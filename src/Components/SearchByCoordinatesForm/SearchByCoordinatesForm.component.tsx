import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";
import Input from "../Input/Input.component";
import { parseWeatherData } from "../../Utils/parseWeatherData";

const SearchByCoordinatesForm = () => {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const { searchBy } = useContext(UserDataContext);

    const handleChangeLongitude = (e: any) => {
        setLongitude(e.target.value);
    };

    const handleChangeLatitude = (e: any) => {
        setLatitude(e.target.value);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let response = await getDataFromOpenWeatherAPI(searchBy, {
                place: {
                    longitude: longitude,
                    latitude: latitude,
                },
            });
            const weatherData = parseWeatherData(response);
            console.log(weatherData);
            console.log(response);
        } catch (e) {
            alert("Wrong coordinates entered.");
            setLatitude("");
            setLongitude("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Will in rain on...
                    <Input
                        type="text"
                        name="longitude"
                        placeholder="longitude"
                        onChangeHandler={handleChangeLongitude}
                        value={longitude}
                    />
                    <Input
                        type="text"
                        name="latitude"
                        placeholder="latitude"
                        onChangeHandler={handleChangeLatitude}
                        value={latitude}
                    />
                </label>
                <input type="submit" hidden />
            </form>
        </div>
    );
};

export default SearchByCoordinatesForm;
