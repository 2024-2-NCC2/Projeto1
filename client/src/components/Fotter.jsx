import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-header">
          <h1 id="foodpath">FoodPath - 2024</h1>
          <p>
            O FoodPath é uma iniciativa dedicada a conscientizar e mobilizar ações para combater a fome no Brasil, <br/> 
            conectando pessoas a ONGs comprometidas com essa causa.
          </p>
          <h1 id="fecap">Fundação Escola de Comércio Álvares Penteado - FECAP</h1>
        </div>
        <div className="footer-content">
          <div className="footer-section donations">
            <h2 id="doacoes">Doações</h2>
            <p>
              Sua contribuição ajuda a transformar vidas. <br/>
              <Link to="/donation" className="underline">Clique aqui para doar</Link> e fazer parte dessa causa.
            </p>
          </div>
          <div className="footer-section contact">
            <h2 id="contato">Contato</h2>
            <p>
              Tem dúvidas ou sugestões? <br/> Entre em contato conosco: 
              <a href="mailto:foodpath@gmail.com" className="underline"> foodpath@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;