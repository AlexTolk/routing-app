import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Redirect Page</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default RedirectPage;
