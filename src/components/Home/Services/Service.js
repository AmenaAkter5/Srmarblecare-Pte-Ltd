import React from 'react';
import './Service.css';


const Service = ({ icon, title, description }) => {
    return (
        <div className='card'>
            <div className='card-img'>
                {icon}
            </div>
            <div className='card-info'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;