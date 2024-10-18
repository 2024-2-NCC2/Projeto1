import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Donation from './pages/Donation/Donation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'donation',
        element: (
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: 'register',
    errorElement: <ErrorPage />,
    element: <Register />,
  },
  {
    path: 'login',
    errorElement: <ErrorPage />,
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);