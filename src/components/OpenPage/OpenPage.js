import React, { useState } from 'react';
import './OpenPage.css';

const OpenPage = () => {
  const [url, setUrl] = useState('');

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
  };

  const openNewPage = () => {
    if (isValidUrl(url)) {
      window.open(url, '_blank');
      setUrl('');
    } else {
      alert('Please enter a valid URL. Make sure to include http:// or https://');
    }
  };

  return (
    <div className='open-container'>
      <h1>Open Page</h1>
      <div className='input-container'>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button onClick={openNewPage}>Open New Page</button>
      </div>
    </div>
  );
};

export default OpenPage;

