import { useContext } from "react";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";
import { WeatherData } from "../../Types/userData.types";

type InfoPanelProps = {
    dataToDisplay: WeatherData;
};

const InfoPanel = ({ dataToDisplay }: InfoPanelProps) => {
    const { typeOfUser } = useContext(UserDataContext);

    return (
        <div>
            <ul>
                <li>Place: {dataToDisplay.place.city}</li>
                <li>Temperature: {dataToDisplay.temperature}</li>
                <li>Pressure: {dataToDisplay.pressure}</li>
                <li>Humidity: {dataToDisplay.humidity}</li>
                <li>Wind speed: {dataToDisplay.windspeed}</li>
                {typeOfUser === TypeOfUser.Meteorologist && (
                    <>
                        <li>Wind Direction: {dataToDisplay.windDirection}</li>
                        <li>Max Temperature: {dataToDisplay.maxTemperature}</li>
                        <li>Min Temperature: {dataToDisplay.minTemperature}</li>
                        <li>Latitude: {dataToDisplay.place.latitude}</li>
                        <li>Longitude: {dataToDisplay.place.longitude}</li>
                    </>
                )}
            </ul>
        </div>
    );
};
export default InfoPanel;
