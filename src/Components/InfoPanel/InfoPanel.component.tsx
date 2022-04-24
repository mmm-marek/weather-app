import { useContext } from "react";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";
const InfoPanel = () => {
    const { searchHistoryData, typeOfUser } = useContext(UserDataContext);

    const lastSearch = searchHistoryData[searchHistoryData.length - 1];
    return (
        <div>
            <ul>
                <li>Temperature: {lastSearch.temperature}</li>
                <li>Pressure: {lastSearch.pressure}</li>
                <li>Humidity: {lastSearch.humidity}</li>
                <li>Wind speed: {lastSearch.windspeed}</li>
                {typeOfUser === TypeOfUser.Meteorologist && (
                    <>
                        <li>Wind Direction: {lastSearch.windDirection}</li>
                        <li>Place: {lastSearch.place.city}</li>
                        <li>Max Temperature: {lastSearch.maxTemperature}</li>
                        <li>Min Temperature: {lastSearch.minTemperature}</li>
                    </>
                )}
            </ul>
        </div>
    );
};
export default InfoPanel;
