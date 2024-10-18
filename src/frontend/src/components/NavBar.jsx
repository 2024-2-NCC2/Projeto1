import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import iconFoodPath from '../public/assets/images/icon-foodpath-white.png';
import { DarkModeToggle } from './DarkModeToggle';

const NavBar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:5000/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.username) {
            setUsername(data.username);
          }
        })
        .catch(() => {
          setUsername(null);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={iconFoodPath} alt="Logo" width="50" height="50" className="d-inline-block align-text-center logo-image" />
          <span className="ms-2 logo-text">FoodPath</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link underline" to="/aboutus">Quem Somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline" to="/contact">Contato</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline" to="/donation">Faça uma Doação</Link>
            </li>
            <li className="nav-item user-profile">
            <FontAwesomeIcon
            icon={faCircleUser}
            size="2x" 
            className="user-profile-icon" 
            onClick={handleLogout} 
            />
            {username ? (
              <span className="user-name">{username}</span>
            ) : (
              <Link className="login-link underline" to="/login">Fazer Login</Link>
            )}
            </li>
            <li className="nav-item">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;