import React, { useEffect } from 'react';
import '../css/HomePage.css';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LocationGrid from '../components/LocationGrid';

function HomePage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      id: 'kelas-xipa1',
      name: 'Kelas XI IPA 1',
      icon: '🏫',
      color: '#3b82f6',
      description: 'Navigasi ke kelas XI IPA 1'
    },
    {
      id: 'kelas-xipa2',
      name: 'Kelas XI IPA 2',
      icon: '🏫',
      color: '#3b82f6',
      description: 'Navigasi ke kelas XI IPA 2'
    },
    {
      id: 'toilet-disabel',
      name: 'Toilet Disabel',
      icon: '♿',
      color: '#3b82f6',
      description: 'Navigasi ke toilet yang accessible'
    },
    {
      id: 'perpustakaan',
      name: 'Perpustakaan',
      icon: '📚',
      color: '#22c55e',
      description: 'Navigasi ke ruang perpustakaan'
    },
    {
      id: 'laboratorium',
      name: 'Laboratorium',
      icon: '🧪',
      color: '#22c55e',
      description: 'Navigasi ke laboratorium sekolah'
    },
    {
      id: 'uks',
      name: 'UKS',
      icon: '🏥',
      color: '#22c55e',
      description: 'Navigasi ke unit kesehatan sekolah'
    }
  ];

  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <LocationGrid locations={locations} onNavigate={onNavigate} />
    </div>
  );
}

export default HomePage;