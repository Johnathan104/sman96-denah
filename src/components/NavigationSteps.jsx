import React, { useState } from 'react';
import '../css/NavigationSteps.css';

function NavigationSteps({ steps, time, features }) {
  const [playingAudio, setPlayingAudio] = useState(false);

  const handlePlayAudio = () => {
    setPlayingAudio(!playingAudio);
    // Di sini bisa ditambahkan logika untuk text-to-speech jika diperlukan
  };

  return (
    <div className="navigation-steps-section">
      <div className="steps-header">
        <div className="steps-info">
          <h3 className="steps-title">Langkah Navigasi</h3>
          <div className="steps-meta">
            <span className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span className="meta-text">Waktu tempuh: <strong>{time}</strong></span>
            </span>
          </div>
        </div>
        <button 
          className={`audio-button ${playingAudio ? 'playing' : ''}`}
          onClick={handlePlayAudio}
          aria-label="Putar panduan suara"
        >
          <span className="audio-icon">🔊</span>
          <span className="audio-text">Putar Panduan Suara</span>
        </button>
      </div>

      <div className="steps-list">
        {steps.map((step, index) => (
          <div key={step.step} className="step-item" style={{ '--step-delay': `${index * 0.1}s` }}>
            <div className="step-number">
              <span>{step.step}</span>
            </div>
            <div className="step-content">
              <p className="step-instruction">{step.instruction}</p>
            </div>
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>

      <div className="features-section">
        <h4 className="features-title">✅ Fitur Aksesibilitas</h4>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-badge" style={{ '--feature-delay': `${index * 0.1}s` }}>
              <span className="feature-check">✓</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="action-buttons">
        <button className="btn btn-primary">
          <span className="btn-icon">🗺️</span>
          <span className="btn-text">Mulai Navigasi</span>
        </button>
        <button className="btn btn-secondary">
          <span className="btn-icon">📱</span>
          <span className="btn-text">Bagikan QR Code</span>
        </button>
      </div> */}
    </div>
  );
}

export default NavigationSteps;