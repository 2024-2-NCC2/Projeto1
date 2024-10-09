import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';
import aboutUsGif from '../../public/assets/gifs/about-us-foodpath-gif.gif';

const AboutUs = () => {
  const [aboutUsContentRef, aboutUsContentInView] = useInView({ triggerOnce: true });
  const [aboutUsImageRef, aboutUsImageInView] = useInView({ triggerOnce: true });

  return (
    <section className="about-us-section">
      <div 
        ref={aboutUsContentRef} 
        className={`about-us-content ${aboutUsContentInView ? 'reveal' : ''}`}
      >
        <h2 className="about-us-title">Quem somos?</h2>
        <p className="about-us-description">
          Nosso projeto, FoodPath, foi criado para <b>aumentar a conscientização sobre a fome no Brasil </b>
          e <b>facilitar a doação para ONGs</b> que estão ativamente combatendo essa questão.
        </p>
        <p className="about-us-description">
          Cada um de nós estamos trabalhando e colaborando para construir uma plataforma que <b>conecte 
          pessoas a causas que importam.</b> Queremos <b>não apenas informar</b>, mas também <b>incentivar ações 
          práticas que possam transformar vidas.</b> <br/>
          <br/>
          Nossa equipe é composta por:
        </p>
        <ul className="team-list">
          <li>Gustavo Oliveira Demetrio</li>
          <li>Felipe Vallim Soares</li>
          <li>Pedro Della Rosa Antônio</li>
          <li>Saulo Pereira de Jesus</li>
          <li>Carlos Roberto Santos Latorre</li>
        </ul>
      </div>

      <div 
        ref={aboutUsImageRef} 
        className={`about-us-image ${aboutUsImageInView ? 'reveal' : ''}`}
      >
        <img src={aboutUsGif} alt="Ilustração da equipe" />
      </div>
    </section>
  );
};

export default AboutUs;