import React, { useState } from 'react';
import './PageStyles.css';

const NikkahPage = () => {
  const [showBasithFamily, setShowBasithFamily] = useState(false);
  const [showShireenFamily, setShowShireenFamily] = useState(false);

  return (
    <article className="page active">
      <div className="content">
        <div className="card-title">NIKKAH</div>
        <div className="assalamu">السلام عليكم</div>
        <div className="lead">You are cordially invited to the Nikkah</div>

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

        <div className="date"><strong>Saturday, 13th December 2025 — 11:30 AM</strong></div>
        <div className="gold-line"></div>
        <div className="details">
          <div className="venue">MKH Auditorium — Convention Center, Kuzhimanna, Malappuram</div>
          <div style={{ marginTop: '8px' }}>
            <a 
              href="https://www.google.com/maps?sca_esv=bdbe2dd8fffd653b&hl=en&gl=de&kgmid=/g/11h7fn6kn0&shndl=30&shem=lcuae,uaasie,shrtsdl&kgs=71c1fbd820050e8d&um=1&ie=UTF-8&fb=1&sa=X&geocode=KcMIapSESaY7MRzXxYEeAHOj&daddr=Kuzhimanna,+Kerala+673641,+India" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
      <div className="footer-note">We pray for your blessings and presence.</div>
    </article>
  );
};

export default NikkahPage;
