import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCamera, faX } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import contactGif from '../../public/assets/gifs/contact-foodpath-gif.gif';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [bannerRef, bannerInView] = useInView({ triggerOnce: true });
  const [emailRef, emailInView] = useInView({ triggerOnce: true });
  const [instagramRef, instagramInView] = useInView({ triggerOnce: true });
  const [xRef, xInView] = useInView({ triggerOnce: true });

  return (
    <div className="contact-container">
      <div ref={bannerRef} className={`contact-banner ${bannerInView ? 'reveal' : ''}`}>
        <div className="contact-text">
          <h1>FALE CONOSCO!</h1>
          <p>Se você tiver dúvidas, sugestões ou quiser saber mais <br /> 
          sobre como ajudar, estamos aqui para ouvir você :)</p>
        </div>
        <div className="contact-image">
          <img src={contactGif} alt="Contato FoodPath" />
        </div>
      </div>

      <div className="contact-options">
        <div ref={emailRef} className={`contact-option ${emailInView ? 'reveal' : ''}`}>
          <FontAwesomeIcon icon={faEnvelope} size="6x" />
          <h3>E-mail</h3>
          <p>Tem alguma dúvida?</p>
          <a href="mailto:foodpathcontact@gmail.com" className="underline">
            foodpathcontact@gmail.com
          </a>
        </div>

        <div ref={instagramRef} className={`contact-option ${instagramInView ? 'reveal' : ''}`}>
          <FontAwesomeIcon icon={faCamera} size="6x" />
          <h3>Instagram</h3>
          <p>Fique por dentro de tudo!</p>
          <a href="https://instagram.com/foodpathoficial" target="_blank" rel="noopener noreferrer" className="underline">
            @foodpathoficial
          </a>
        </div>

        <div ref={xRef} className={`contact-option ${xInView ? 'reveal' : ''}`}>
          <FontAwesomeIcon icon={faX} size="6x" />
          <h3>X</h3>
          <p>Acompanhe nossas atualizações!</p>
          <a href="https://x.com/foodpathoficial" target="_blank" rel="noopener noreferrer" className="underline">
            @foodpathoficial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;