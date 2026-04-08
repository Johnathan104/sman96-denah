import React from 'react';
import '../css/LocationCard.css';

function LocationCard({ location, index, isHovered, onHover, onLeave, onNavigate }) {
  return (
    <button
      className={`location-card ${isHovered ? 'hovered' : ''}`}
      style={{
        '--card-color': location.color,
        '--animation-delay': `${index * 0.1}s`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
      onClick={() => onNavigate(location)}
    >
      <div className="card-background"></div>
      
      <div className="card-content">
        <div className="card-icon-wrapper">
          <div className="card-icon">{location.icon}</div>
        </div>
        
        <div className="card-text">
          <h3 className="card-title">{location.name}</h3>
          <p className="card-description">{location.description}</p>
        </div>

        <div className="card-arrow">
          <span>→</span>
        </div>
      </div>

      <div className="card-shine"></div>
    </button>
  );
}

export default LocationCard;