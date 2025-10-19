import React, { useState } from 'react';
import './PageStyles.css';

const ReceptionPage = () => {
  const [showBasithFamily, setShowBasithFamily] = useState(false);
  const [showShireenFamily, setShowShireenFamily] = useState(false);

  return (
    <article className="page active">
      <div className="content">
        <div className="card-title">WEDDING RECEPTION</div>
        <div className="assalamu">السلام عليكم</div>
        <div className="lead">You are cordially invited to the Wedding Reception</div>

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

        <div className="date"><strong>Sunday, 14th December 2025 — 6:00 PM to 9:00 PM</strong></div>
        <div className="gold-line"></div>
        <div className="details">
          <div className="venue">PM PALACE, Althara, Guruvayur</div>
          <div style={{ marginTop: '8px' }}>
            <a 
              href="https://www.google.com/maps?rlz=1C1PNBB_enDE1127DE1127&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KU3QHpTVv6c7MSvgtApN23T1&daddr=PM+PALACE,+kunnathoor,+punnayurkulam,+Althara,+Guruvayur,+Kerala+679561,+India" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
      <div className="footer-note">We look forward to celebrating with you.</div>
    </article>
  );
};

export default ReceptionPage;
