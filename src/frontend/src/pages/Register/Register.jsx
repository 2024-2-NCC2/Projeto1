import React, { useState } from 'react';
import './Register.css';
import IconFoodPath from '../../public/assets/images/icon-foodpath-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={IconFoodPath} alt="FoodPath Logo" className="register-logo" />
        <h1 className="register-heading">Faça Parte da Mudança <br/> Juntos, Podemos Acabar com a Fome</h1>
      </div>

      <div className="register-right">
        <h2 className="register-title">Criar Conta</h2>
        <form className="register-form">
          <div className="register-input-group">
            <FontAwesomeIcon icon={faEnvelope} className="register-input-icon" />
            <label className="register-label">Email</label>
            <input type="email" className="register-input" placeholder="Exemplo: seuemail@exemplo.com" required />
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faUser} className="register-input-icon" />
            <label className="register-label">Nome</label>
            <input type="text" className="register-input" placeholder="Exemplo: Nome Sobrenome" required />
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faLock} className="register-input-icon" />
            <label className="register-label">Senha</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="register-input"
              placeholder="Digite sua senha"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="register-eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faLock} className="register-input-icon" />
            <label className="register-label">Confirmar Senha</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="register-input"
              placeholder="Confirme sua senha"
              required
            />
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEye : faEyeSlash}
              className="register-eye-icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>

          <p className="register-login-link">
            Já possui uma conta? <a href="/login">Fazer Login</a>
          </p>

          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;