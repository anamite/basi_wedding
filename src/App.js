import React from 'react';
import Silk from './components/Silk';
import Sparkles from './components/Sparkles';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
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
        <HomePage />
      </div>
    </div>
  );
}

export default App;
