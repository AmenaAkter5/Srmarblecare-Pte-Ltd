import React from 'react';
import './Feature.css';

const Feature = ({ icon, title, description }) => {
    return (
        <div className='feature'>
            <div className='feature-title'>
                <img src={icon} alt="" />
                <h1 className=' font-bold text-lg ml-2 text-[#333]'>{title}</h1>
            </div>
            <div>
                <p className='des'>{description}</p>
            </div>
        </div>
    );
};

export default Feature;
