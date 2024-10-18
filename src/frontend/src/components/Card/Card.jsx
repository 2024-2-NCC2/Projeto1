import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Card = ({ title, description, link, imageSrc, userId, ongId }) => {
  
  const handleRedirect = async () => {
    if (!userId) {
      console.error('Usuário não logado');
      return;
    }
    
    try {
      const ongName = title;
      await axios.post('http://localhost:5000/redirect', {
        userId: userId,
        ongId: ongId,
        ongName: ongName
      });
      window.open(link, '_blank');
    } catch (error) {
      console.error('Erro ao registrar o redirecionamento:', error);
    }
  };  

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={handleRedirect} className="card-button">
          Visite a ONG <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
      </div>
    </div>
  );
};

export default Card;
