import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ donationPage }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return donationPage;
};

export default ProtectedRoute;