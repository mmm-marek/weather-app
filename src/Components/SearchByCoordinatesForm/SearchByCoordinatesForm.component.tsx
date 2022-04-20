import { useState, useContext } from "react";
import { getDataFromOpenWeatherAPI } from "../../Utils/queryOpenWeather";
import { UserDataContext } from "../../Context/userData.context";
import Input from "../Input/Input.component";

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
                    <Input
                        type="text"
                        name="longitude"
                        placeholder="longitude"
                        onChangeHandler={handleChangeLongitude}
                    />
                    <Input
                        type="text"
                        name="latitude"
                        placeholder="latitude"
                        onChangeHandler={handleChangeLatitude}
                    />
                </label>
                <input type="submit" hidden />
            </form>
        </div>
    );
};

export default SearchByCoordinatesForm;
