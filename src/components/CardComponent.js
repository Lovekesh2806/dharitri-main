// CardComponent.js
import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ imageSrc, title, description, buttonText }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button className="card-button">{buttonText}</button>
            </div>
        </div>
    );
};

export default CardComponent;



