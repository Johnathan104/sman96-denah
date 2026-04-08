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
      id: 'kelas-lt1',
      lantai: '1',
      name: 'Kelas lantai1',
      icon: '🏫',
      color: '#3b82f6',
      description: 'Navigasi ke kelas lantai 1'
    },
    {
      id: 'kelas-lt2',
      lantai: '2',
      name: 'Kelas lantai 2',
      icon: '🏫',
      color: '#3b82f6',
      description: 'Navigasi ke kelas lantai 2'
    },
    {
      id: 'kelas-lt3',
      lantai: '3',
      name: 'Kelas lantai 3',
      icon: '🏫',
      color: '#3b82f6',
      description: 'Navigasi ke kelas lantai 3'
    },
    {
      id: 'ruang-piket',
      lantai: 'dasar',
      name: 'Ruang Piket',
      icon: '🏢',
      color: '#3b82f6',
      description: 'Navigasi ke ruang piket'
    },
    {
      id: 'perpustakaan',
      lantai: '3',
      name: 'Perpustakaan',
      icon: '📚',
      color: '#22c55e',
      description: 'Navigasi ke ruang perpustakaan'
    },
    {
      id: 'laboratorium_fisika',
      lantai: '1',
      name: 'Laboratorium Fisika',
      icon: '🔬',
      color: '#22c55e',
      description: 'Navigasi ke laboratorium fisika'
    },
    {
      id: 'laboratorium_kimia',
      lantai: '1',
      name: 'Laboratorium Kimia',
      icon: '🧪',
      color: '#22c55e',
      description: 'Navigasi ke laboratorium kimia'
    },
    {
      id: 'laboratorium_komputer',
      lantai: '1',
      name: 'Laboratorium Komputer',
      icon: '💻',
      color: '#22c55e',
      description: 'Navigasi ke laboratorium komputer'
    },
    {
      id: 'laboratorium_biologi',
      lantai: '1',
      name: 'Laboratorium Biologi',
      icon: '🧬',
      color: '#22c55e',
      description: 'Navigasi ke laboratorium Biologi'
    },
    {
      id: 'selasar_tangga',
      lantai: 'dasar',
      name: 'Selasar Tangga',
      icon: '🏢',
      color: '#22c55e',
      description: 'Navigasi ke selasar tangga untuk akses ke lantai atas'
    },
    {
      id: "ruang_osis",
      lantai: '2',
      name: "Ruang OSIS",
      icon: "🏢",
      color: '#c52252',
      description: 'Navigasi ke ruang OSIS'
    },
    {
      id: "ruang_ekskul",
      lantai: '2',
      name: "Ruang Ekstrakurikuler",
      icon: "🏢",
      color: '#c52252',
      description: 'Navigasi ke ruang ekstrakurikuler'
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