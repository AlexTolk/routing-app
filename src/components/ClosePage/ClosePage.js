import React from 'react';
import './ClosePage.css'

const ClosePage = () => {
  const closeWindow = () => {
    if (window.confirm("Are you sure you want to close this window?")) {
      window.open("about:blank", "_self");
      window.close();
    }
  };

  return (
    <div className='close-container'>
      <h1>Close Page</h1>
      <button 
        onClick={closeWindow} 
        className='close-button'
      >
        Close Window
      </button>
    </div>
  );
};

export default ClosePage;

