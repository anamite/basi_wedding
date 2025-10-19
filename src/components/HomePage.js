import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  const [showBasithFamily, setShowBasithFamily] = useState(false);
  const [showShireenFamily, setShowShireenFamily] = useState(false);

  return (
    <article className="page active">
      <div className="content">
        <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <div className="bismillah-translation">
          In the name of Allah, the Most Beneficent, the Most Merciful
        </div>

        <div style={{ 
          fontSize: '17px', 
          fontWeight: '700', 
          marginTop: '24px', 
          color: 'var(--gold)',
          letterSpacing: '1px'
        }}>
          Aboobacker Sidhique &amp; Sheeba Sidhique
        </div>
        <p style={{ 
          fontSize: '14px', 
          marginTop: '8px', 
          color: 'rgba(255,255,255,0.9)',
          fontStyle: 'italic'
        }}>
          Theruvath Kadavil House, Anchangadi, Chavakkad
        </p>
        <div style={{
          margin: '24px auto',
          padding: '16px 24px',
          background: 'linear-gradient(135deg, rgba(207, 168, 90, 0.1), rgba(207, 168, 90, 0.05))',
          borderRadius: '12px',
          border: '1px solid rgba(207, 168, 90, 0.2)',
          maxWidth: '600px'
        }}>
          <p style={{ 
            fontSize: '15px', 
            lineHeight: '1.8',
            color: 'rgba(255,255,255,0.95)'
          }}>
            With the grace of Allah (SWT), we are pleased to invite you to the Nikkah &amp; Wedding Reception of
          </p>
        </div>

        <div 
          className="names" 
          onClick={() => setShowBasithFamily(!showBasithFamily)}
        >
          Basith Sidhique
        </div>
        <div className={`family-details ${showBasithFamily ? 'show' : ''}`}>
          <p>Son of Aboobacker Sidhique &amp; Sheeba Sidhique</p>
          <p>Grandson of Late T.K. Muhammed Unni &amp; Late P.P. Fathima, and Late K.K. Hydrose &amp; Jameela Hydrose</p>
        </div>

        <div className="names-separator">&</div>

        <div 
          className="names" 
          onClick={() => setShowShireenFamily(!showShireenFamily)}
        >
          Shireen Mansoor
        </div>
        <div className={`family-details ${showShireenFamily ? 'show' : ''}`}>
          <p>Daughter of Mansoor Ali K.C. &amp; Shehna Mansoor</p>
          <p>Granddaughter of Late Dr. Moideen Karatt Chali &amp; Late Khadeejah Karatt Chali, and Late Dr. Nazir Hussain Ahmed &amp; Fathima Nazir</p>
          <p>Bliss Haven, Lake Line Road, Puzhayoram Residency, Madathil Padam, Feroke</p>
        </div>

        <div className="gold-pattern"></div>
        <div className="date"><strong>13 &amp; 14 December 2025</strong></div>
        <div className="gold-line"></div>
        <div className="details">
          You are invited to the Nikkah ceremony and Wedding Reception celebrating the marriage of Basith &amp; Shireen. 
          Scroll or use the navigation above to view full details and location links. Your presence and prayers are most cherished.
        </div>

        <div className="actions">
          <button className="btn" onClick={() => onNavigate('nikkah')}>View Nikkah</button>
          <button className="btn ghost" onClick={() => onNavigate('reception')}>View Reception</button>
        </div>
      </div>
      <div className="footer-note">
        Mob: <strong>+91 96330 11120</strong> — Kindly RSVP via email or phone
      </div>
    </article>
  );
};

export default HomePage;
