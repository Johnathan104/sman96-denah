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
    'kelas-lt1': {
      title: 'Navigasi ke Kelas Lantai 1',
      startPoint: 'Gerbang Utama',
      destination: 'Kelas Lantai 1',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 1.' },
        { step: 4, instruction: 'Kelas di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-kelas-lt1'
    },
    'kelas-lt2': {
      title: 'Navigasi ke Kelas Lantai 2',
      startPoint: 'Gerbang Utama',
      destination: 'Kelas Lantai 2',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Kelas di sebelah kanan.' }
      ],
      time: '4-6 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-kelas-lt2'
    },
    'kelas-lt3': {
      title: 'Navigasi ke Kelas Lantai 3',
      startPoint: 'Gerbang Utama',
      destination: 'Kelas Lantai 3',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 3.' },
        { step: 4, instruction: 'Kelas di sebelah kanan.' }
      ],
      time: '5-7 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-kelas-lt3'
    },
    'ruang-piket': {
      title: 'Navigasi ke Ruang Piket',
      startPoint: 'Gerbang Utama',
      destination: 'Ruang Piket',
      accessType: 'Kursi Roda',
      steps: [
        { step: 1, instruction: 'Jalan lurus melalui koridor utama.' },
        { step: 2, instruction: 'Ikuti jalur tactile paving ke arah depan.' },
        { step: 3, instruction: 'Ruang piket ada di lantai dasar sebelah kiri.' },
        { step: 4, instruction: 'Akses mudah dengan pintu lebar.' }
      ],
      time: '2-3 menit',
      features: ['Jalur landai', 'Lantai dasar', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-ruang-piket'
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
        { step: 4, instruction: 'Perpustakaan ada di lantai 3 sebelah kiri.' }
      ],
      time: '5-7 menit',
      features: ['Jalur landai', 'Ramp tersedia', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-perpustakaan'
    },
    'laboratorium_fisika': {
      title: 'Navigasi ke Laboratorium Fisika',
      startPoint: 'Gerbang Utama',
      destination: 'Laboratorium Fisika',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kanan di depan kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 1.' },
        { step: 4, instruction: 'Laboratorium Fisika di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-lab-fisika'
    },
    'laboratorium_kimia': {
      title: 'Navigasi ke Laboratorium Kimia',
      startPoint: 'Gerbang Utama',
      destination: 'Laboratorium Kimia',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kanan di depan kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 1.' },
        { step: 4, instruction: 'Laboratorium Kimia di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-lab-kimia'
    },
    'laboratorium_komputer': {
      title: 'Navigasi ke Laboratorium Komputer',
      startPoint: 'Gerbang Utama',
      destination: 'Laboratorium Komputer',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kanan di depan kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 1.' },
        { step: 4, instruction: 'Laboratorium Komputer di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-lab-komputer'
    },
    'laboratorium_biologi': {
      title: 'Navigasi ke Laboratorium Biologi',
      startPoint: 'Gerbang Utama',
      destination: 'Laboratorium Biologi',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kanan di depan kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 1.' },
        { step: 4, instruction: 'Laboratorium Biologi di sebelah kanan.' }
      ],
      time: '3-5 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-lab-biologi'
    },
    'selasar_tangga': {
      title: 'Navigasi ke Selasar Tangga',
      startPoint: 'Gerbang Utama',
      destination: 'Selasar Tangga',
      accessType: 'Kursi Roda',
      steps: [
        { step: 1, instruction: 'Jalan lurus melalui area utama sekolah.' },
        { step: 2, instruction: 'Ikuti jalur tactile paving ke arah tengah.' },
        { step: 3, instruction: 'Selasar tangga ada di lantai dasar.' },
        { step: 4, instruction: 'Ramp tersedia untuk akses ke lantai atas.' }
      ],
      time: '2-3 menit',
      features: ['Jalur landai', 'Ramp tersedia', 'Akses lantai atas'],
      mapUrl: 'url-to-map-image-selasar-tangga'
    },
    'ruang_osis': {
      title: 'Navigasi ke Ruang OSIS',
      startPoint: 'Gerbang Utama',
      destination: 'Ruang OSIS',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Ruang OSIS di sebelah kiri lantai 2.' }
      ],
      time: '4-6 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-ruang-osis'
    },
    'ruang_ekskul': {
      title: 'Navigasi ke Ruang Ekstrakurikuler',
      startPoint: 'Gerbang Utama',
      destination: 'Ruang Ekstrakurikuler',
      accessType: 'Kursi Roda + Tactile Paving',
      steps: [
        { step: 1, instruction: 'Ikuti jalur tactile paving lurus.' },
        { step: 2, instruction: 'Belok kiri di kantin.' },
        { step: 3, instruction: 'Naik ramp ke lantai 2.' },
        { step: 4, instruction: 'Ruang Ekstrakurikuler di sebelah kiri lantai 2.' }
      ],
      time: '4-6 menit',
      features: ['Jalur landai', 'Tanpa tangga', 'Ramah Kursi Roda'],
      mapUrl: 'url-to-map-image-ruang-ekskul'
    }
  };
  const currentNavigation = navigationData[location.id] || navigationData['kelas-lt1'];

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

          <NavigationMap
            lantai={location.lantai}
          />

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