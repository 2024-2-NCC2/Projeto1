import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, link, imageSrc }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={imageSrc} 
          alt={title} 
          className="card-image" 
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="card-button" target="_blank" rel="noopener noreferrer">
          Visite a ONG <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  );
};

export default Card;