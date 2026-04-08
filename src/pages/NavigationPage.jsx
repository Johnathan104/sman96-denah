import React, { useEffect } from 'react';
import '../css/NavigationPage.css';
import Header from '../components/Header';
import NavigationMap from '../components/NavigationMap';
import NavigationSteps from '../components/NavigationSteps';
import BackButton from '../components/BackButton';

function NavigationPage({ location, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Data navigasi untuk setiap lokasi
  const navigationData = {
    'kelas-xipa1': {
      title: 'Navigasi ke Kelas XI IPA 1',
      startPoint: 'Gerbang Utama',
      destination: 'Kelas XI IPA 1',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Kelas XI IPA 1 di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-xipa1'
    },
    'kelas-xipa2': {
      title: 'Navigasi ke Kelas XI IPA 2',
      startPoint: 'Gerbang Utama',
      destination: 'Kelas XI IPA 2',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Kelas XI IPA 2 di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-xipa2'
    },
    'toilet-disabel': {
      title: 'Navigasi ke Toilet Disabel',
      startPoint: 'Gerbang Utama',
      destination: 'Toilet Disabel',
      accessType: 'Kursi Roda',
      steps: [
        { step: 1, instruction: 'Jalan lurus melalui koridor utama.' },
        { step: 2, instruction: 'Belok kanan di sudut.' },
        { step: 3, instruction: 'Toilet disabel ada di ujung koridor.' },
        { step: 4, instruction: 'Pintu otomatis untuk kemudahan akses.' }
      ],
      time: '2-3 menit',
      features: ['Jalur landai', 'Pintu otomatis', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-toilet'
    },
    'perpustakaan': {
      title: 'Navigasi ke Perpustakaan',
      startPoint: 'Gerbang Utama',
      destination: 'Perpustakaan',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving ke arah timur.' },
        { step: 2, instruction: 'Belok kanan di persimpangan.' },
        { step: 3, instruction: 'Naik ramp yang tersedia.' },
        { step: 4, instruction: 'Perpustakaan ada di lantai 1 sebelah kiri.' }
      ],
      time: '4-6 menit',
      features: ['Jalur landai', 'Ramp tersedia', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-perpustakaan'
    },
    'laboratorium': {
      title: 'Navigasi ke Laboratorium',
      startPoint: 'Gerbang Utama',
      destination: 'Laboratorium',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kanan di depan kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Laboratorium di sebelah kanan lantai 2.' }
      ],
      time: '4-6 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-lab'
    },
    'uks': {
      title: 'Navigasi ke UKS',
      startPoint: 'Gerbang Utama',
      destination: 'UKS (Unit Kesehatan Sekolah)',
      accessType: 'Kursi Roda',
      steps: [
        { step: 1, instruction: 'Jalan lurus melalui area utama sekolah.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp kecil yang tersedia.' },
        { step: 4, instruction: 'UKS berada di samping ruang guru.' }
      ],
      time: '3-4 menit',
      features: ['Jalur landai', 'Mudah diakses', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-uks'
    }
  };

  const currentNavigation = navigationData[location.id] || navigationData['kelas-xipa2'];

  return (
    <div className="navigation-page">
      <Header />
      <div className="navigation-container">
        <BackButton onClick={onBack} />
        
        <div className="navigation-content">
          <div className="navigation-header">
            <h1 className="navigation-title">{currentNavigation.title}</h1>
            <div className="location-info">
              <div className="info-item">
                <span className="info-label">Lokasi Awal:</span>
                <span className="info-value">{currentNavigation.startPoint}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tujuan:</span>
                <span className="info-value">{currentNavigation.destination}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Akses:</span>
                <span className="info-value">{currentNavigation.accessType}</span>
              </div>
            </div>
          </div>

          <NavigationMap />

          <NavigationSteps 
            steps={currentNavigation.steps}
            time={currentNavigation.time}
            features={currentNavigation.features}
          />
        </div>
      </div>
    </div>
  );
}

export default NavigationPage;