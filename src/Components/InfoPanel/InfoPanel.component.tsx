import { useContext } from "react";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";
import { WeatherData } from "../../Types/userData.types";
import "./InfoPanel.styles.scss";

type InfoPanelProps = {
    dataToDisplay: WeatherData;
};

type InfoPanelLineProps = {
    label: string;
    dataToDisplay: string;
};

const InfoPanelLine = ({ label, dataToDisplay }: InfoPanelLineProps) => (
    <li>
        <span>{label}:</span>
        <span>{dataToDisplay}</span>
    </li>
);

const InfoPanel = ({ dataToDisplay }: InfoPanelProps) => {
    const { typeOfUser } = useContext(UserDataContext);

    return (
        <div className="info-panel-container">
            <ul>
                <InfoPanelLine
                    label="Place"
                    dataToDisplay={dataToDisplay.place.city}
                />
                <InfoPanelLine
                    label="Temperature"
                    dataToDisplay={dataToDisplay.temperature}
                />
                <InfoPanelLine
                    label="Pressure"
                    dataToDisplay={dataToDisplay.pressure}
                />
                <InfoPanelLine
                    label="Humidity"
                    dataToDisplay={dataToDisplay.humidity}
                />
                <InfoPanelLine
                    label="Wind Speed"
                    dataToDisplay={dataToDisplay.windspeed}
                />
                {typeOfUser === TypeOfUser.Meteorologist && (
                    <>
                        <InfoPanelLine
                            label="Wind Direction"
                            dataToDisplay={dataToDisplay.windDirection}
                        />
                        <InfoPanelLine
                            label="Max Temperature"
                            dataToDisplay={dataToDisplay.maxTemperature}
                        />
                        <InfoPanelLine
                            label="Min Temperature"
                            dataToDisplay={dataToDisplay.minTemperature}
                        />
                        <InfoPanelLine
                            label="Latitude"
                            dataToDisplay={dataToDisplay.place.latitude}
                        />
                        <InfoPanelLine
                            label="Longitude"
                            dataToDisplay={dataToDisplay.place.longitude}
                        />
                    </>
                )}
            </ul>
        </div>
    );
};
export default InfoPanel;
