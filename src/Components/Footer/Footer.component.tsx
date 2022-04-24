import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/userData.context";
import TypeOfUser from "../../Enums/typeOfUser.enum";
import "./Footer.styles.scss";

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
        <footer className="footer-container">
            <div className="user-type-container">
                <span>
                    {typeOfUser === TypeOfUser.Layman
                        ? "LAYMAN"
                        : "METEOROLOGIST"}
                </span>
                <span onClick={handleClick}> SWITCH </span>
            </div>
            <span className="reset" onClick={handleReset}>
                RESET
            </span>
        </footer>
    );
};

export default Footer;
