import React, { useState, useEffect } from 'react';
import './css/App.css';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleNavigateToLocation = (location) => {
    setSelectedLocation(location);
    setCurrentPage('navigation');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedLocation(null);
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigateToLocation} />
      )}
      {currentPage === 'navigation' && selectedLocation && (
        <NavigationPage 
          location={selectedLocation} 
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;