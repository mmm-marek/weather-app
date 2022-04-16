import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.component";
import "./Navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <Link to="/"> SILVER RAIN </Link>
                <Link to="/"> HOMEPAGE </Link>
                <Link to="/history-page"> HISTORY PAGE </Link>
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Navigation;
