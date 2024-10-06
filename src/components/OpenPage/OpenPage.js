import React, { useState } from 'react';
import './OpenPage.css'

const OpenPage = () => {
  const [url, setUrl] = useState('');

  const openNewPage = () => {
    window.open(url, '_blank');
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
