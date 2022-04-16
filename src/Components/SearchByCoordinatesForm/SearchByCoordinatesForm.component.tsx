import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";

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
        let response = await getDataFromOpenWeatherAPI(searchBy, {
            place: {
                longitude: longitude,
                latitude: latitude,
            },
        });
        console.log(response);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Will in rain on...
                    <input
                        type="text"
                        name="longitude"
                        placeholder="longitude"
                        onChange={handleChangeLongitude}
                    />
                    <input
                        type="text"
                        name="latitude"
                        placeholder="latitude"
                        onChange={handleChangeLatitude}
                    />
                </label>
                <input type="submit" hidden />
            </form>
        </div>
    );
};

export default SearchByCoordinatesForm;
