import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";

const Footer = () => {
    const { typeOfUser, setTypeOfUser, clearSearchData } =
        useContext(UserDataContext);
    let navigate = useNavigate();

    const handleClick = () => {
        setTypeOfUser(
            typeOfUser === TypeOfUser.Layman
                ? TypeOfUser.Meteorologist
                : TypeOfUser.Layman
        );
    };

    const handleReset = () => {
        clearSearchData();
        navigate("/");
    };

    return (
        <div>
            <span>
                {typeOfUser === TypeOfUser.Layman ? "LAYMAN" : "METEOROLOGIST"}
            </span>
            <span onClick={handleClick}> SWITCH </span>
            <span onClick={handleReset}>RESET</span>
        </div>
    );
};

export default Footer;
