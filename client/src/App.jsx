import Header from './components/Header';
import Fotter from './components/Footer';

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
      <Fotter/>
    </div>
  )
}

export default App
