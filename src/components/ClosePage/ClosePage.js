import React from 'react';

const ClosePage = () => {
  const closeWindow = () => {
    window.close();
  };

  return (
    <div>
      <h1>Close Page</h1>
      <button onClick={closeWindow}>Close Window</button>
    </div>
  );
};

export default ClosePage;
