import React from 'react';
import '../css/LocationCard.css';
import { DoorOpen, Users,  Building2, FlaskConical, Dna, Microscope, Laptop, Accessibility, Building, BookOpen } from 'lucide-react';


const iconMap = {
  'pintu-masuk': DoorOpen,
  'meja-piket-guru': Users,
  'lift-utama': DoorOpen,
  'kelas-a': Building2,
  'kelas-b': Building2,
  'kelas-c': Building2,
  'kelas-d': Building2,
  'kelas-e': Building2,
  'kelas-f': Building2,
  'kelas-g': Building2,
  'kelas-h': Building2,
  'kelas-i': Building2,
  'kelas-j': Building2,
  'kelas-k': Building2,
  'kelas-l': Building2,
  'kelas-m': Building2,
  'kelas-n': Building2,
  'kelas-o': Building2,
  'kelas-p': Building2,
  'kelas-q': Building2,
  'kelas-r': Building2,
  'kelas-s': Building2,
  'lab-kimia': FlaskConical,
  'lab-biologi': Dna,
  'lab-fisika': Microscope,
  'lab-komputer': Laptop,
  'toilet-disabilitas-lt1': Accessibility,
  'toilet-disabilitas-lt2': Accessibility,
  'toilet-disabilitas-lt3': Accessibility,
  'ruang-ekskul': Building,
  'ruang-osis': Building,
  'perpustakaan': BookOpen
};

function LocationCard({ location, index, isHovered, onHover, onLeave, onNavigate }) {
  const IconComponent = iconMap[location.id];
  console.log(`Rendering LocationCard for ${location.name} with isHovered=${isHovered}`);
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
          <div className="card-icon">{IconComponent ? <IconComponent size={40} strokeWidth={1.5} /> : location.icon}</div>
        </div>
        
        <div className="card-text">
          <div className="card-lantai">Lantai {location.lantai}</div>
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