import { StrictMode } from 'react'
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
      element: <Donation/>
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
