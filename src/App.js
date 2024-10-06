import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import RedirectPage from './components/RedirectPage/RedirectPage';
import ClosePage from './components/ClosePage/ClosePage';
import OpenPage from './components/OpenPage/OpenPage';

import './App.css'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/redirect">Redirect</Link></li>
          <li><Link to="/close">Close</Link></li>
          <li><Link to="/open">Open</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/close" element={<ClosePage />} />
        <Route path="/open" element={<OpenPage />} />
      </Routes>
    </Router>
  );
};

export default App;

