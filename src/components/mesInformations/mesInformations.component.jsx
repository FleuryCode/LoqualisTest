import React from "react";
import CustomButton from "../customButton/customButton.component";
import './mesInformations.styles.scss';

const MesInformations = () => {
    return (
        <div className="mesInformationsContainer container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h3>Mes Informations</h3>
                </div>
            </div>
            <div className="row mb-0 mb-sm-2">
                <div className="col-12 col-sm-6">
                    <p>Prenom: Jerome</p>
                </div>
                <div className="col-12 col-sm-6">
                    <p>Date de Création: 19/03/2022</p>
                </div>
            </div>
            <div className="row mb-0 mb-sm-2">
                <div className="col-12 col-sm-6">
                    <p>Nom: Ferraro</p>
                </div>
                <div className="col-12 col-sm-6">
                    <p>Organisation: Ragni Eclairage</p>
                </div>
            </div>
            <div className="row mb-0 mb-sm-2">
                <div className="col-12 col-sm-6">
                    <p>Email: customer@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                    <CustomButton text={'Modifier Mes Informations'} style={'mesInformations'} />
                </div>
            </div>
        </div>
    );
}

export default MesInformations;