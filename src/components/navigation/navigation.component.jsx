import React from "react";
import './navigation.styles.scss';
import { ReactComponent as DashboardIcon } from '../../assets/dashboardIcon.svg';

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="dashBoardSelector navItems">
                <DashboardIcon className="icon" />
                <p>Dashboard</p>
            </div>

        </div>
    );
}

export default Navigation;