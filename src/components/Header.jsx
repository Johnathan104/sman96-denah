import React from 'react';
import '../css/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header"> {/* Remove min-h-[200px] to let it shrink/grow naturally */}
  <div className="header-container">
    <div className="header-content">
      <div className="logo-section">
        <div className="h-[78px] w-[78px] mr-4">
          <img src={logo} alt="School Logo" className="" />
        </div>
        <div className="header-text">
          {/* Changed span to h1 and fixed the padding class */}
          <span className="text-[40px] leading-tight text-white border-b border-white pb-1 font-bold">
            SMAN 96 Jakarta
          </span>
          <p className="school-subtitle">Smart Accessibility Navigation (NZEB School)</p>
        </div>
      </div>
      <div className="header-info">
        <span className="voice-badge">♿ Voice Assistance</span>
      </div>
    </div>
  </div>
</header>
  );
}

export default Header;