import React, { useState, useEffect } from 'react';
import Silk from './components/Silk';
import Sparkles from './components/Sparkles';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import NikkahPage from './components/NikkahPage';
import ReceptionPage from './components/ReceptionPage';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Load page based on hash
    const hash = window.location.hash.replace('#', '') || 'home';
    const allowed = ['home', 'nikkah', 'reception'];
    setActivePage(allowed.includes(hash) ? hash : 'home');

    // Handle browser back/forward buttons
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '') || 'home';
      if (allowed.includes(newHash)) {
        setActivePage(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

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
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'nikkah' && <NikkahPage />}
        {activePage === 'reception' && <ReceptionPage />}
        
        <Navigation activePage={activePage} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;
