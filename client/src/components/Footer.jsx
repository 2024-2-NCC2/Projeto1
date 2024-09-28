import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h1 id="foodpath">FoodPath - {year}</h1>
          <p>
            O FoodPath é uma plataforma dedicada a mobilizar doações <br/>
            para combater a fome no Brasil.
          </p>
          <p><br/>
          Fundação Escola de Comércio Álvares Penteado - <b>FECAP</b></p>
        </div>

        <div className="footer-right">
          <h2 id="doacoes">Doações</h2>
          <p>
            Sua contribuição ajuda a transformar vidas. <br/>
            <Link to="/donation" className="underline">Clique aqui para doar</Link> <br/>
            e faça parte dessa causa!
          </p>
          <h2 id="contato">Contato</h2>
          <p>
            Tem dúvidas ou sugestões? <br/>
            Entre em contato conosco: <br/>
            <a href="mailto:foodpathcontact@gmail.com" className="underline">foodpathcontact@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;