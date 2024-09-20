import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='app-header'>
        <div className="foodpath-logo">
            <Link to="/">
                <h1>FoodPath</h1>        
            </Link>
        </div>
        <NavBar/>
    </header>
  )
}

export default Header