import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='app-header'>
        <div className="foodpath-logo">
            <h1>FoodPath</h1>
        </div>
        <NavBar/>
    </header>
  )
}

export default Header