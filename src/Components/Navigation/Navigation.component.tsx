import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <Link className="nav-link logotype" to="/">
                    SILVER RAIN
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to="/">
                        HOME
                    </Link>
                    <Link className="nav-link" to="/history-page">
                        HISTORY
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
