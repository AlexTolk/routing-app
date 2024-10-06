import React, { useState, useEffect } from 'react';
import './Home.css'

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({
    virtualWidth: window.innerWidth,
    virtualHeight: window.innerHeight,
    realWidth: window.innerWidth * window.devicePixelRatio,
    realHeight: window.innerHeight * window.devicePixelRatio,
    pixelRatio: window.devicePixelRatio,
  });


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='home-container'>
      <h1>Welcome to the Routing app!</h1>
      <p><strong>Date: </strong>{time.toLocaleDateString()}</p>
      <p>
        <strong>Time: </strong>{time.toLocaleTimeString('zh-CN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
          timeZone: 'Asia/Shanghai',
        })}
      </p>
      <p><strong>User Agent: </strong>{navigator.userAgent}</p>
      <p><strong>Virtual Viewport Size: </strong>{viewport.virtualWidth} x {viewport.virtualHeight}</p>
      <p><strong>Real Viewport Size: </strong>{viewport.realWidth.toFixed(2)} x {viewport.realHeight.toFixed(2)}</p>
      <p><strong>Device Pixel Ratio: </strong>{viewport.pixelRatio}</p>
      <p><strong>Mouse Coordinates: </strong>{mouseCoords.x}, {mouseCoords.y}</p>
    </div>
  );
};

export default Home;
