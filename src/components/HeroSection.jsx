import React from 'react';
import '../css/HeroSection.css';
import { Map } from 'lucide-react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-overlay"> </div>
        <div className="hero-content ">
          <div className="hero-badge">
            <span>Navigasi Cerdas</span>
          </div>
          <p className="hero-title text-white text-left">
            Sistem Navigasi Disabilitas Berbasis QR Code
          </p>
          <p className="hero-subtitle">
            Membantu siswa menemukan jalur akses terbaik yang aman dan ramah kursi roda.
          </p>
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