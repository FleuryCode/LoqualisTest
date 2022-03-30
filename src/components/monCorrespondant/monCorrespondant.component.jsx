import React from "react";
import './monCorrespondant.styles.scss';
import ProfilePicture from '../../assets/jFleuryProfile.jpg';
import CustomButton from "../customButton/customButton.component";

const MonCorrespondant = () => {
    return (
        <div className="monCorrespondantContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Mon Correspondant</h3>
                </div>
            </div>
            <div className="row d-flex align-items-center mt-5">
                <div className="col-2">
                    <div className="profileImageContainer mx-auto">
                        <img src={ProfilePicture} alt="" />
                    </div>

                </div>
                <div className="col-6 col-lg-8 col-xl-6 ps-4">
                    <h4>Idkls</h4>
                    <p className="phoneNumber">07 68 17 27 57</p>
                </div>
                <div className="col-4 col-lg-6 col-xl-4">
                    <CustomButton text={'Contacter'} style={'correspondant'} />
                </div>
            </div>
        </div>
    );
}

export default MonCorrespondant;