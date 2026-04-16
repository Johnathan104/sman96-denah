import React, { useState } from 'react';
import '../css/LocationGrid.css';
import LocationCard from './LocationCard';

function LocationGrid({ locations, onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null);

  // Group locations by lantai
  const lantaiOrder = ['dasar', '1', '2', '3'];
  const groupedByLantai = {};
  
  lantaiOrder.forEach(lantai => {
    groupedByLantai[lantai] = locations.filter(loc => loc.lantai === lantai);
  });

  const getLantaiLabel = (lantai) => {
    if (lantai === 'dasar') return 'Lantai Dasar';
    return `Lantai ${lantai}`;
  };

  return (
    <section className="location-grid-section" id="locations">
      <div className="location-grid-container">
        <div className="section-header">
          <h2 className="section-title">Pilih Lokasi Tujuan</h2>
          <p className="section-description">
            Pilih tujuanmu untuk mulai navigasi 
          </p>
        </div>

        {lantaiOrder.map((lantai) => 
          groupedByLantai[lantai].length > 0 && (
            <div key={lantai} className="lantai-section">
              <div className="lantai-header">
                <h3 className="lantai-title">{getLantaiLabel(lantai)}</h3>
              </div>
              <div className="locations-grid">
                {groupedByLantai[lantai].map((location, index) => (
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
            </div>
          )
        )}

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