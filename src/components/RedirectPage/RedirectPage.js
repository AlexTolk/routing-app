import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RedirectPage.css'

const RedirectPage = () => {
  const navigate = useNavigate();

  return (
    <div className='redirect-container'>
      <h1>Redirect Page</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default RedirectPage;
