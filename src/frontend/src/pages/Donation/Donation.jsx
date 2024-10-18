import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Donation.css';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

import bancoAlimentosImg from '../../public/assets/images/ongs/ong-banco-alimentos-card.png';
import misturaiImg from '../../public/assets/images/ongs/ong-misturai-card.png';
import stopHungerImg from '../../public/assets/images/ongs/ong-stop-hunger-card.png';
import acaoCidadaniaImg from '../../public/assets/images/ongs/ong-acao-cidadania-card.png';
import sescImg from '../../public/assets/images/ongs/ong-sesc-card.png';
import caritasBrasilImg from '../../public/assets/images/ongs/ong-caritas-brasileira-card.png';

import loadingGif from '../../public/assets/gifs/loading-gif.gif';

const Donation = () => {
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ongs');
        setOngs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar ONGs:', error);
        setError(true);
        setLoading(false);
      }
    };
    fetchOngs();
  }, []);

  const getImageByTitle = (title) => {
    switch (title) {
      case 'Banco de Alimentos':
        return bancoAlimentosImg;
      case 'Misturaí':
        return misturaiImg;
      case 'Stop Hunger':
        return stopHungerImg;
      case 'Ação Cidadania':
        return acaoCidadaniaImg;
      case 'Sesc - Mesa Brasil':
        return sescImg;
      case 'Cáritas Brasileira - Sumaúma':
        return caritasBrasilImg;
      default:
        return '';
    }
  };

  return (
    <div className="donation-page">
      <h1>Escolha uma ONG para apoiar!</h1>
      <p className="donation-subtitle">
        Selecione uma das organizações abaixo e contribua diretamente para a luta contra a fome. <br />
        Sua doação pode fazer toda diferença!
      </p>

      {loading ? (
        <div className="loading">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <p>Carregando ONGs...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>Erro ao carregar as ONGs. Por favor, tente novamente mais tarde.</p>
        </div>
      ) : (
        <div ref={cardsRef} className={`donation-cards ${cardsInView ? 'reveal' : ''}`}>
          {ongs.map((ong) => (
            <Card 
              key={ong.id}
              title={ong.name}
              description={ong.description}
              link={ong.link}
              imageSrc={getImageByTitle(ong.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;