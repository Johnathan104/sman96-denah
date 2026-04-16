import React from 'react';
import '../css/HeroSection.css';
import { Map } from 'lucide-react';
import accessa from '../assets/accessaonly.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container text-[#444474]">
        <div className="hero-overlay"> </div>
        <div className="hero-content ">
          <div className="hero-badge  font-bold text-[12px] mb-4">
            <span>Navigasi Cerdas</span>
          </div>
          <div>
            <div className=" border-b border-[#444474] flex flex-col items-center w-full">
              <img src={accessa} alt="Accessa Logo" className="hero-logo w-[200px]" />
              <p className="hero-title text-white text-left accessaText">
                ACCESSA
              </p>
            </div>
            <p className="hero-subtitle text-left">
              Accessibility system for smart school area  developed for SMAN 96 Jakarta.
            </p>
          </div>
          
          <a href="#locations">
            <button className="hero-cta"  >
                <span className="cta-icon"><Map size={24} /></span>
                <span className="cta-text">MULAI NAVIGASI</span>
            </button>
          </a>
        </div>
        <div className="hero-decoration"></div>
      </div>
    </section>
  );
}

export default HeroSection;