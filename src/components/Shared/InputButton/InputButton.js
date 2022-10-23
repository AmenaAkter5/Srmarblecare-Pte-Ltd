import React from 'react';
import './InputButton.css';
// import { FaArrowRight } from "react-icons/fa";


const InputButton = ({ buttonName }) => {

    return (

        <div className='input-btn-container'>
            {/* <input className='input-btn' type="button" value={buttonName} /> */}
            {/* <FaArrowRight /> */}
        </div>

    );
};

export default InputButton;