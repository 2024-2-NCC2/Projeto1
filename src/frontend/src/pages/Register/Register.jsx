import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import IconFoodPath from '../../public/assets/images/icon-foodpath-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Usuário registrado com sucesso', data);
        navigate('/login');
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao registrar', error);
      setError('Erro ao registrar. Tente novamente.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={IconFoodPath} alt="FoodPath Logo" className="register-logo" />
        <h1 className="register-heading">Faça Parte da Mudança <br /> Juntos, Podemos Acabar com a Fome</h1>
      </div>

      <div className="register-right">
        <h2 className="register-title">Criar Conta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-input-group">
            <FontAwesomeIcon icon={faEnvelope} className="register-input-icon" />
            <label className="register-label">Email</label>
            <input
              type="email"
              className="register-input"
              placeholder="Exemplo: seuemail@exemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faUser} className="register-input-icon" />
            <label className="register-label">Nome</label>
            <input
              type="text"
              className="register-input"
              placeholder="Exemplo: Nome Sobrenome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faLock} className="register-input-icon" />
            <label className="register-label">Senha</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="register-input"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              type={confirmPasswordVisible ? 'text' : 'password'}
              className="register-input"
              placeholder="Confirme sua senha"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEye : faEyeSlash}
              className="register-eye-icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>

          {error && <p className="register-error">{error}</p>}

          <button type="submit" className="register-button">Registrar</button>

          <p className="register-login-link">
            Já possui uma conta? <a href="/login">Fazer Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;