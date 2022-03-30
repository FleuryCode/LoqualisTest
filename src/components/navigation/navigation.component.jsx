import React from "react";
import './navigation.styles.scss';
// Icons
import { ReactComponent as DashboardIcon } from '../../assets/dashboardIcon.svg';
import { ReactComponent as OffersIcon } from '../../assets/offersIcon.svg';
import { ReactComponent as PartnersIcon } from '../../assets/partnersIcon.svg';
import { ReactComponent as CommandesIcon } from '../../assets/commandesIcon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settingsIcon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logoutIcon.svg';


const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="navItems">
                <DashboardIcon className="icon" />
                <p>Dashboard</p>
            </div>
            <div className="navItems">
                <OffersIcon className="icon" />
                <p>Offres</p>
            </div>
        </div>
    );
}

export default Navigation;