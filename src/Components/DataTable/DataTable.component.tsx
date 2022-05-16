import { useContext } from "react";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";
import { WeatherData } from "../../Types/userData.types";
import "./DataTable.styles.scss";

const TableHeader = () => {
    const { typeOfUser } = useContext(UserDataContext);
    return (
        <div className="table-header table-line-display">
            <span>PLACE</span>
            <span>TEMPERATURE</span>
            <span>PRESSURE</span>
            <span>HUMIDITY</span>
            <span>WIND SPEED</span>
            {typeOfUser === TypeOfUser.Meteorologist && (
                <>
                    <span>WIND DIRECTION</span>
                    <span>MAX TEMPERATURE</span>
                    <span>MIN TEMPERATURE</span>
                    <span>LATITUDE</span>
                    <span>LONGITUDE</span>
                </>
            )}
        </div>
    );
};

const DataRow = (props: WeatherData) => {
    const { typeOfUser } = useContext(UserDataContext);
    return (
        <div className="table-line table-line-display">
            <span>{props.place.city}</span>
            <span>{props.temperature} °C</span>
            <span>{props.pressure}</span>
            <span>{props.humidity} %</span>
            <span>{props.windspeed} km/h</span>
            {typeOfUser === TypeOfUser.Meteorologist && (
                <>
                    <span>{props.windDirection}</span>
                    <span>{props.maxTemperature} °C</span>
                    <span>{props.minTemperature} °C</span>
                    <span>{props.place.latitude}</span>
                    <span>{props.place.longitude}</span>
                </>
            )}
        </div>
    );
};

const DataTable = () => {
    const { searchHistoryData, clearSearchHistoryData } =
        useContext(UserDataContext);

    const handleDelete = () => {
        clearSearchHistoryData();
    };

    return (
        <div className="data-table-container">
            <TableHeader />
            <hr />
            <div className="table-content">
                {searchHistoryData.map((el) => (
                    <DataRow {...el} />
                ))}
            </div>
            <span className="delete" onClick={handleDelete}>
                DELETE
            </span>
        </div>
    );
};
export default DataTable;
