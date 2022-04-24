import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.component";
import "./Navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <Link className="nav-link logotype" to="/">
                    {" "}
                    SILVER RAIN{" "}
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to="/">
                        {" "}
                        HOMEPAGE{" "}
                    </Link>
                    <Link className="nav-link" to="/history-page">
                        {" "}
                        HISTORY PAGE{" "}
                    </Link>
                </div>
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Navigation;
