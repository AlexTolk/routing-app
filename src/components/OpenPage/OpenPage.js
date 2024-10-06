import React, { useState } from 'react';

const OpenPage = () => {
  const [url, setUrl] = useState('');

  const openNewPage = () => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Open Page</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={openNewPage}>Open New Page</button>
    </div>
  );
};

export default OpenPage;
