import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import IconFoodPath from '../../public/assets/images/icon-foodpath-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash, faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    containsLetters: false,
    containsNumbers: false,
    containsSpecialChars: false,
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateName = (inputName) => {
    setName(inputName);
    const valid = inputName.trim().split(' ').length > 1;
    setNameValid(valid);
  };

  const validatePassword = (inputPassword) => {
    setPassword(inputPassword);
    setPasswordValid({
      length: inputPassword.length >= 8,
      containsLetters: /[A-Za-z]/.test(inputPassword),
      containsNumbers: /\d/.test(inputPassword),
      containsSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!nameValid) {
      setError('O nome deve incluir sobrenome.');
      return;
    }
  
    const isPasswordValid = passwordValid.length && passwordValid.containsLetters && passwordValid.containsNumbers && passwordValid.containsSpecialChars;
    if (!isPasswordValid) {
      setError('A senha não cumpre todos os requisitos.');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('As senhas devem ser iguais.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Usuário registrado com sucesso', data);
        navigate('/login');
      } else {
        setError(data.error || 'Erro ao registrar. Tente novamente.');
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
              placeholder="seuemail@exemplo.com"
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
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => validateName(e.target.value)}
            />
          </div>

          <div className="validation-feedback">
            <p className={nameValid ? 'valid' : 'invalid'}>
              <FontAwesomeIcon icon={nameValid ? faCheckCircle : faXmarkCircle} />
              Deve ter o primeiro e o segundo nome.
            </p>
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faLock} className="register-input-icon" />
            <label className="register-label">Senha</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="register-input"
              placeholder="Digite sua Senha"
              required
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="register-eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="validation-feedback">
            <p className={passwordValid.length ? 'valid' : 'invalid'}>
              <FontAwesomeIcon icon={passwordValid.length ? faCheckCircle : faXmarkCircle} />
              Deve conter 8 ou mais caracteres.
            </p>
            <p className={passwordValid.containsLetters ? 'valid' : 'invalid'}>
              <FontAwesomeIcon icon={passwordValid.containsLetters ? faCheckCircle : faXmarkCircle} />
              Deve conter letras.
            </p>
            <p className={passwordValid.containsNumbers ? 'valid' : 'invalid'}>
              <FontAwesomeIcon icon={passwordValid.containsNumbers ? faCheckCircle : faXmarkCircle} />
              Deve conter números.
            </p>
            <p className={passwordValid.containsSpecialChars ? 'valid' : 'invalid'}>
              <FontAwesomeIcon icon={passwordValid.containsSpecialChars ? faCheckCircle : faXmarkCircle} />
              Deve conter caracteres especiais.
            </p>
          </div>

          <div className="register-input-group">
            <FontAwesomeIcon icon={faLock} className="register-input-icon" />
            <label className="register-label">Confirme sua Senha</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              className="register-input"
              placeholder="Confirme sua Senha"
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

          <button type="submit" className="register-button">Criar conta</button>

          <p className="register-login-link">
            Você já possui uma conta? <a href="/login">Faça Login!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;