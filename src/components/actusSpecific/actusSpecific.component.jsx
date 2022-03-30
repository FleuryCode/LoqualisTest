import React from "react";
import './actusSpecific.styles.scss';

const ActusSpecific = ({ index }) => {
    return (
        <div className="actusSpecificContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h4>Actu {index + 1}</h4>
                </div>
                <div className="col-12 mb-4 actusTextContainer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <p>Lorem ipsum dolor sit</p>
                </div>
            </div>
        </div>
    );
}

export default ActusSpecific;