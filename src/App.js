import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Silk from './components/Silk';
import Sparkles from './components/Sparkles';
import HomePage from './components/HomePage';
import NikkahPage from './components/NikkahPage';
import ReceptionPage from './components/ReceptionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Silk
          speed={10}
          scale={1}
          color="#59241c"
          noiseIntensity={0.8}
          rotation={0.3}
        />
        <Sparkles />
        
        <div className="site" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nikkah" element={<NikkahPage />} />
            <Route path="/reception" element={<ReceptionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
