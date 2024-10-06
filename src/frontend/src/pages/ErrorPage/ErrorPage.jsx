import React from 'react';
import './ErrorPage.css';

import errorImage from '../../public/assets/gifs/error-not-found-foodpath-gif.gif';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={errorImage} alt="Erro 404 - Página não encontrada" className="error-image" />
      <p className="error-text">Erro 404 <br/>
      Oops! Parece que você está perdido. A página que você está procurando não existe.</p>
      <a href="/" className="back-home">Voltar para a página inicial</a>
    </div>
  );
}

export default ErrorPage;