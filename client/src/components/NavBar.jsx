import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='app-navbar'>
        <ul>
            <li><Link to="/aboutus" className='underline'>Quem Somos</Link></li>
            <li><Link to="/donation" className='underline'>Faça uma Doação</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar