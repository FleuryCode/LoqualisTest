import React from "react";
import './customButton.styles.scss';

const CustomButton = ({text, style, onClick}) => {
    return(
        <div onClick={onClick} className={`${style} customButtonContainer`}>
            {text}
        </div>
    );
}

export default CustomButton;