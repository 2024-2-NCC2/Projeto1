import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Donation from './pages/Donation/Donation.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const RouterWithUserId = () => {
  const [userId, setUserId] = useState(null);

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
        if (data.id) {
          setUserId(data.id);
        }
      })
      .catch((error) => {
        console.error('Erro ao obter o perfil do usuário:', error);
      });
    }
  }, []);

  const router = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"aboutus",
          element: <AboutUs/>
        },
        {
          path:"contact",
          element: <Contact/>
        },
        {
          path:"donation",
          element: <Donation userId={userId} />
        },
      ]
    },
    {
      path:"register",
      errorElement: <ErrorPage/>,
      element: <Register/>
    },
    {
      path:"login",
      errorElement: <ErrorPage/>,
      element: <Login/>
    },
  ]);

  return <RouterProvider router={router}/>;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterWithUserId />
  </StrictMode>,
)