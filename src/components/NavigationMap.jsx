import React from 'react';
import '../css/NavigationMap.css';
import denah_dasar from "../assets/lantai_dasar.png";
import denah_lantai1 from "../assets/lantai_1.png";
import denah_lantai2 from "../assets/lantai_2.png";
import denah_lantai3 from "../assets/lantai_3.png";

function NavigationMap({lantai}) {
  const navigationData = {
    'dasar': {
      title: 'Peta Denah Lantai Dasar',
      mapUrl: denah_dasar
    },
    '1': {
      title: 'Peta Denah Lantai 1',
      mapUrl: denah_lantai1
    },
    '2': {
      title: 'Peta Denah Lantai 2',
      mapUrl: denah_lantai2
    },
    '3':{
      title: 'Peta Denah Lantai 3',
      mapUrl: denah_lantai3
    }
  }
  const currentNavigation = navigationData[lantai] || navigationData['dasar'];
  return (
    <div className="navigation-map-section flex flex-col items-center">
      <h3 className="map-title">{currentNavigation.title}</h3>
      <img src={currentNavigation.mapUrl} alt={currentNavigation.title} className="map-image" />
    </div>
  );
}

export default NavigationMap;



//  <div className="map-header">
//         <h3 className="map-title">Peta Denah Sekolah</h3>
//       </div>
      
//       <div className="map-container">
//         <div className="map-placeholder">
//           <svg
//             viewBox="0 0 800 600"
//             className="map-svg"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* Background */}
//             <rect width="800" height="600" fill="#f0f4f8" />
            
//             {/* Grid lines */}
//             <g stroke="#e2e8f0" strokeWidth="1" opacity="0.3">
//               <line x1="0" y1="0" x2="800" y2="0" />
//               <line x1="0" y1="150" x2="800" y2="150" />
//               <line x1="0" y1="300" x2="800" y2="300" />
//               <line x1="0" y1="450" x2="800" y2="450" />
//               <line x1="0" y1="600" x2="800" y2="600" />
//               <line x1="0" y1="0" x2="0" y2="600" />
//               <line x1="200" y1="0" x2="200" y2="600" />
//               <line x1="400" y1="0" x2="400" y2="600" />
//               <line x1="600" y1="0" x2="600" y2="600" />
//               <line x1="800" y1="0" x2="800" y2="600" />
//             </g>

//             {/* Rooms/Areas */}
//             {/* Kelas XI IPA 1 */}
//             <rect x="150" y="100" width="120" height="100" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="2" rx="4" />
//             <text x="210" y="155" fontSize="14" fontWeight="600" fill="#1e40af" textAnchor="middle">XI IPA 1</text>

//             {/* Kelas XI IPA 2 */}
//             <rect x="320" y="100" width="120" height="100" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="2" rx="4" />
//             <text x="380" y="155" fontSize="14" fontWeight="600" fill="#1e40af" textAnchor="middle">XI IPA 2</text>

//             {/* Laboratorium */}
//             <rect x="490" y="100" width="120" height="100" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="2" rx="4" />
//             <text x="550" y="155" fontSize="14" fontWeight="600" fill="#15803d" textAnchor="middle">Lab</text>

//             {/* Corridor */}
//             <rect x="100" y="220" width="650" height="80" fill="#f5f5f5" stroke="#cbd5e1" strokeWidth="2" rx="4" />
//             <text x="400" y="270" fontSize="12" fill="#64748b" textAnchor="middle">Koridor Utama</text>

//             {/* Kantin */}
//             <rect x="150" y="330" width="120" height="80" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="2" rx="4" />
//             <text x="210" y="375" fontSize="13" fontWeight="600" fill="#92400e" textAnchor="middle">Kantin</text>

//             {/* Perpustakaan */}
//             <rect x="320" y="330" width="120" height="80" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="2" rx="4" />
//             <text x="380" y="375" fontSize="13" fontWeight="600" fill="#15803d" textAnchor="middle">Perpustakaan</text>

//             {/* UKS */}
//             <rect x="490" y="330" width="120" height="80" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="2" rx="4" />
//             <text x="550" y="375" fontSize="13" fontWeight="600" fill="#15803d" textAnchor="middle">UKS</text>

//             {/* Toilet */}
//             <rect x="650" y="330" width="80" height="80" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="2" rx="4" />
//             <text x="690" y="375" fontSize="12" fontWeight="600" fill="#1e40af" textAnchor="middle">Toilet</text>

//             {/* Tangga/Ramp indicators */}
//             <circle cx="100" cy="450" r="20" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2" />
//             <text x="100" y="455" fontSize="12" fontWeight="600" fill="#92400e" textAnchor="middle">Ramp</text>

//             {/* Gate */}
//             <rect x="650" y="450" width="100" height="60" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="2" rx="4" />
//             <text x="700" y="485" fontSize="12" fontWeight="600" fill="#5b21b6" textAnchor="middle">Gerbang</text>

//             {/* Tactile Paving Indicator */}
//             <line x1="100" y1="520" x2="750" y2="520" stroke="#f59e0b" strokeWidth="8" opacity="0.3" strokeDasharray="10,5" />
//             <text x="50" y="545" fontSize="12" fill="#92400e" fontWeight="500">Jalur Tactile Paving</text>

//             {/* Legend Icons */}
//             <circle cx="680" cy="20" r="8" fill="#3b82f6" opacity="0.7" />
//             <text x="710" y="25" fontSize="11" fill="#64748b">Kelas</text>

//             <circle cx="680" cy="45" r="8" fill="#22c55e" opacity="0.7" />
//             <text x="710" y="50" fontSize="11" fill="#64748b">Fasilitas Umum</text>

//             <circle cx="680" cy="70" r="8" fill="#f97316" opacity="0.7" />
//             <text x="710" y="75" fontSize="11" fill="#64748b">Ramp/Akses</text>
//           </svg>
//         </div>
//       </div>

//       <div className="map-legend">
//         <div className="legend-item">
//           <div className="legend-color" style={{ background: '#3b82f6' }}></div>
//           <span>Area Kelas</span>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color" style={{ background: '#22c55e' }}></div>
//           <span>Fasilitas Umum</span>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color" style={{ background: '#f97316' }}></div>
//           <span>Akses Khusus</span>
//         </div>
//         <div className="legend-item">
//           <div className="legend-color" style={{ background: '#f59e0b' }}></div>
//           <span>Tactile Paving</span>
//         </div>
//       </div>