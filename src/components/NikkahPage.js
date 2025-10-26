import React, { useState } from 'react';
import './HomePage.css';

const NikkahPage = () => {
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
            color: 'var(--gold)',
            textShadow: '0 0 10px rgba(207, 168, 90, 0.6), 0 0 20px rgba(207, 168, 90, 0.4)',
            fontWeight: '500'
          }}>
            With the grace of Allah (SWT), we are pleased to invite you to the Nikkah of
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

        <div className="date">
          <strong>Saturday, 13th December 2025</strong>
          <div style={{ marginTop: '8px', fontSize: '16px' }}>11:30 AM</div>
        </div>
        <div className="gold-line"></div>
        <div className="details">
          <div className="venue">MKH Auditorium — Convention Center, Kuzhimanna, Malappuram</div>
          <div style={{ marginTop: '8px' }}>
            <a 
              href="https://www.google.com/maps?sca_esv=bdbe2dd8fffd653b&hl=en&gl=de&kgmid=/g/11h7fn6kn0&shndl=30&shem=lcuae,uaasie,shrtsdl&kgs=71c1fbd820050e8d&um=1&ie=UTF-8&fb=1&sa=X&geocode=KcMIapSESaY7MRzXxYEeAHOj&daddr=Kuzhimanna,+Kerala+673641,+India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-subtle"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
      <div className="footer-note">
        <strong>Your presence will be our greatest blessing</strong>
      </div>
    </article>
  );
};

export default NikkahPage;
