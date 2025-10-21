import React, { useState, useRef } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [showBasithFamily, setShowBasithFamily] = useState(false);
  const [showShireenFamily, setShowShireenFamily] = useState(false);
  const [showBasithFamilyNikkah, setShowBasithFamilyNikkah] = useState(false);
  const [showShireenFamilyNikkah, setShowShireenFamilyNikkah] = useState(false);
  const [showBasithFamilyReception, setShowBasithFamilyReception] = useState(false);
  const [showShireenFamilyReception, setShowShireenFamilyReception] = useState(false);

  const nikkahRef = useRef(null);
  const receptionRef = useRef(null);
  const topRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Main Card */}
      <article className="page active" ref={topRef}>
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

          <div className="actions">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <button className="btn" onClick={() => scrollToSection(nikkahRef)}>View Nikkah</button>
              <div style={{ fontSize: '12px', color: 'rgba(207, 168, 90, 0.9)', textAlign: 'center', letterSpacing: '0.5px' }}>
                13th Dec. • Noon
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <button className="btn ghost" onClick={() => scrollToSection(receptionRef)}>View Reception</button>
              <div style={{ fontSize: '12px', color: 'rgba(207, 168, 90, 0.9)', textAlign: 'center', letterSpacing: '0.5px' }}>
                14th Dec. • Evening
              </div>
            </div>
          </div>

          <div className="details">
            Scroll down or click the buttons above to view full details and location links.
          </div>
        </div>
        <div className="footer-note">
          <strong>Your presence will be our greatest blessing</strong>
        </div>
      </article>

      {/* Nikkah Card */}
      <article className="page active" ref={nikkahRef} style={{ marginTop: '40px' }}>
        <div className="content">
          <div className="card-title">NIKKAH</div>
          <div className="assalamu">السلام عليكم</div>
          <div className="lead">You are cordially invited to the Nikkah of</div>

          <div 
            className="names" 
            onClick={() => setShowBasithFamilyNikkah(!showBasithFamilyNikkah)}
          >
            Basith Sidhique
          </div>
          <div className={`family-details ${showBasithFamilyNikkah ? 'show' : ''}`}>
            <p>Son of Aboobacker Sidhique &amp; Sheeba Sidhique</p>
            <p>Grandson of Late T.K. Muhammed Unni &amp; Late P.P. Fathima, and Late K.K. Hydrose &amp; Jameela Hydrose</p>
          </div>

          <div className="names-separator">&</div>

          <div 
            className="names" 
            onClick={() => setShowShireenFamilyNikkah(!showShireenFamilyNikkah)}
          >
            Shireen Mansoor
          </div>
          <div className={`family-details ${showShireenFamilyNikkah ? 'show' : ''}`}>
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
        <div className="footer-note">We pray for your blessings and presence.</div>
      </article>

      {/* Reception Card */}
      <article className="page active" ref={receptionRef} style={{ marginTop: '40px' }}>
        <div className="content">
          <div className="card-title">WEDDING RECEPTION</div>
          <div className="assalamu">السلام عليكم</div>
          <div className="lead">You are cordially invited to the Wedding Reception of</div>

          <div 
            className="names" 
            onClick={() => setShowBasithFamilyReception(!showBasithFamilyReception)}
          >
            Basith Sidhique
          </div>
          <div className={`family-details ${showBasithFamilyReception ? 'show' : ''}`}>
            <p>Son of Aboobacker Sidhique &amp; Sheeba Sidhique</p>
            <p>Grandson of Late T.K. Muhammed Unni &amp; Late P.P. Fathima, and Late K.K. Hydrose &amp; Jameela Hydrose</p>
          </div>

          <div className="names-separator">&</div>

          <div 
            className="names" 
            onClick={() => setShowShireenFamilyReception(!showShireenFamilyReception)}
          >
            Shireen Mansoor
          </div>
          <div className={`family-details ${showShireenFamilyReception ? 'show' : ''}`}>
            <p>Daughter of Mansoor Ali K.C. &amp; Shehna Mansoor</p>
            <p>Granddaughter of Late Dr. Moideen Karatt Chali &amp; Late Khadeejah Karatt Chali, and Late Dr. Nazir Hussain Ahmed &amp; Fathima Nazir</p>
            <p>Bliss Haven, Lake Line Road, Puzhayoram Residency, Madathil Padam, Feroke</p>
          </div>

          <div className="date">
            <strong>Sunday, 14th December 2025</strong>
            <div style={{ marginTop: '8px', fontSize: '16px' }}>6:00 PM to 9:00 PM</div>
          </div>
          <div className="gold-line"></div>
          <div className="details">
            <div className="venue">PM PALACE, Althara, Guruvayur</div>
            <div style={{ marginTop: '8px' }}>
              <a 
                href="https://www.google.com/maps?rlz=1C1PNBB_enDE1127DE1127&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KU3QHpTVv6c7MSvgtApN23T1&daddr=PM+PALACE,+kunnathoor,+punnayurkulam,+Althara,+Guruvayur,+Kerala+679561,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-subtle"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
        <div className="footer-note">We look forward to celebrating with you.</div>
      </article>
    </div>
  );
};

export default HomePage;

