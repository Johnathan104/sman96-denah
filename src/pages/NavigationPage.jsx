import React, { useEffect } from 'react';
import '../css/NavigationPage.css';
import Header from '../components/Header';
import NavigationMap from '../components/NavigationMap';
import NavigationSteps from '../components/NavigationSteps';
import BackButton from '../components/BackButton';
import navigationData from './navigationData.js';

function NavigationPage({ location, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


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
      <div className="bottom-2 text-xs text-gray-500 flex justify-end bg-[#f8fafc] items-center mt-8">
      © 2026 Ir. Hans Dermawan, S.Pd., M.T. - Teknik Sipil, Fakultas Teknologi Cerdas - UKRIDA
      </div>
    </div>
  );
}

export default NavigationPage;