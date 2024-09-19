import './App.css'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <p>NavBar</p>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
