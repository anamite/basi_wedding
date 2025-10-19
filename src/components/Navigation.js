import React from 'react';
import './Navigation.css';

const Navigation = ({ activePage, onNavigate }) => {
  // Don't show navigation on home page
  if (activePage === 'home') {
    return null;
  }

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navlinks" role="navigation" aria-label="Sections">
        <a 
          href="#home" 
          className="navlink"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          Home
        </a>
        
        {activePage !== 'nikkah' && (
          <a 
            href="#nikkah" 
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('nikkah');
            }}
          >
            Nikkah
          </a>
        )}
        
        {activePage !== 'reception' && (
          <a 
            href="#reception" 
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('reception');
            }}
          >
            Reception
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
