import React from "react";
import './mesCommandes.styles.scss';

const MesCommandes = () => {
    return(
        <div className="mesCommandesContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Mes Commandes (en cours)</h3>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-1">
                    <p>ID</p>
                </div>
                <div className="col-3">
                    <p>Nom de l'offre</p>
                </div>
                <div className="col-2">
                    <p>Partenaire</p>
                </div>
                <div className="col-3">
                    <p>Commandé le</p>
                </div>
                <div className="col-3">
                    <p>Valable Jusqu'au</p>
                </div>
            </div>
        </div>
    );
}

export default MesCommandes;