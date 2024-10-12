import React, { useState } from 'react';
import './Login.css';
import IconFoodPath from '../../public/assets/images/icon-foodpath-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={IconFoodPath} alt="FoodPath Logo" className="login-logo" />
        <h1 className="login-heading">Faça Parte da Mudança <br/> Juntos, Podemos Acabar com a Fome</h1>
      </div>

      <div className="login-right">
        <h2 className="login-title">Fazer Login</h2>
        <form className="login-form">
          <div className="login-input-group">
            <FontAwesomeIcon icon={faEnvelope} className="login-input-icon" />
            <label className="login-label">Email</label>
            <input type="email" className="login-input" placeholder="Digite seu email" required />
          </div>

          <div className="login-input-group">
            <FontAwesomeIcon icon={faLock} className="login-input-icon" />
            <label className="login-label">Senha</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="login-input"
              placeholder="Digite sua senha"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="login-eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>

          <p className="login-forgot-password">
            <a href="/forgot-password">Esqueci minha senha</a>
          </p>

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="login-register-link">
          Não possui uma conta? <a href="/register">Registre-se agora!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;