import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import IconFoodPath from '../../public/assets/images/icon-foodpath-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login bem-sucedido', data);
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={IconFoodPath} alt="FoodPath Logo" className="login-logo" />
        <h1 className="login-heading">Faça Parte da Mudança <br/> Juntos, Podemos Acabar com a Fome</h1>
      </div>

      <div className="login-right">
        <h2 className="login-title">Fazer Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-input-group">
            <FontAwesomeIcon icon={faEnvelope} className="login-input-icon" />
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-input-group">
            <FontAwesomeIcon icon={faLock} className="login-input-icon" />
            <label className="login-label">Senha</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="login-input"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="login-eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

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