import React from "react";
import ActusSpecific from "../actusSpecific/actusSpecific.component";
import './actus.styles.scss';

const Actus = () => {
    const actusArray = [1, 2, 3, 4];
    return(
        <div className="actusContainer container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h3>Les Actus</h3>
                </div>
            </div>
            <div className="row">
                {
                    actusArray.map((actus, index) => (
                        <div key={actus} className="col-12">
                            <ActusSpecific index={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Actus;