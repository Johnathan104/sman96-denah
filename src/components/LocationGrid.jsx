import React, { useState } from 'react';
import '../css/LocationGrid.css';
import LocationCard from './LocationCard';

function LocationGrid({ locations, onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="location-grid-section" id="locations">
      <div className="location-grid-container">
        <div className="section-header">
          <h2 className="section-title">Pilih Lokasi Tujuan</h2>
          <p className="section-description">
            Pilih lokasi yang ingin Anda navigasi untuk mendapatkan panduan langkah demi langkah
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
              isHovered={hoveredId === location.id}
              onHover={() => setHoveredId(location.id)}
              onLeave={() => setHoveredId(null)}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <div className="grid-footer">
          <p className="footer-text">
            💡 Tip: Sistem navigasi ini menggunakan teknologi QR Code dan tactile paving untuk memastikan aksesibilitas maksimal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LocationGrid;