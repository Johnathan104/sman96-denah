import React from 'react';
import '../css/Header.css';
import logo from '../assets/logo.png';
import ukridaLogo from '../assets/ukrida.png';
import { Mic2Icon } from 'lucide-react';

function Header() {
  return (
    <header className="header"> {/* Remove min-h-[200px] to let it shrink/grow naturally */}
  <div className="header-container">
    <div className="header-content">
      <div className="logo-section">
        <div className="h-[78px] w-[78px] mr-4">
          <img src={logo} alt="School Logo" className="" />
        </div>
        <div className="h-[78px] flex flex-col items-center justify-center mr-4">
          <img src ={ukridaLogo} className='h-[60px] w-[60px]' alt ="Ukrida Logo"/>
          <span className='text-[10px]'> Teknik Sipil - FTC UKRIDA</span>
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
        <span className="voice-badge"><Mic2Icon size={20} className="inline mr-2" style={{verticalAlign: 'middle'}} /> Voice Assistance</span>
      </div>
    </div>
  </div>
</header>
  );
}

export default Header;