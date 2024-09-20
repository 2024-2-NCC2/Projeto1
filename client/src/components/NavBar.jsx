import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='app-navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">Sobre nós</Link></li>
            <li><Link to="/donation">Faça uma Doação</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar