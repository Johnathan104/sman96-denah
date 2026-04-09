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
  // ===== LANTAI DASAR =====
  { id: 'pintu-masuk', lantai: 'dasar', name: 'Pintu Masuk', icon: '🚪', color: '#3b82f6', description: 'Navigasi ke pintu masuk' },
  { id: 'meja-piket-guru', lantai: 'dasar', name: 'Meja Piket Guru', icon: '🧑‍🏫', color: '#3b82f6', description: 'Navigasi ke meja piket guru' },
  { id: 'lift-utama', lantai: 'dasar', name: 'Lift (Lt.1, 2, 3)', icon: '🛗', color: '#f59e0b', description: 'Navigasi ke lift untuk semua lantai' },
  { id: 'kelas-a', lantai: 'dasar', name: 'Ruang Kelas A', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas A' },
  { id: 'kelas-b', lantai: 'dasar', name: 'Ruang Kelas B', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas B' },

  // ===== LANTAI 1 =====
  { id: 'kelas-c', lantai: '1', name: 'Ruang Kelas C', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas C' },
  { id: 'kelas-d', lantai: '1', name: 'Ruang Kelas D', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas D' },
  { id: 'kelas-e', lantai: '1', name: 'Ruang Kelas E', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas E' },
  { id: 'lab-kimia', lantai: '1', name: 'Lab Kimia', icon: '🧪', color: '#22c55e', description: 'Navigasi ke lab kimia' },
  { id: 'lab-biologi', lantai: '1', name: 'Lab Biologi', icon: '🧬', color: '#22c55e', description: 'Navigasi ke lab biologi' },
  { id: 'lab-fisika', lantai: '1', name: 'Lab Fisika', icon: '🔬', color: '#22c55e', description: 'Navigasi ke lab fisika' },
  { id: 'lab-komputer', lantai: '1', name: 'Lab Komputer', icon: '💻', color: '#22c55e', description: 'Navigasi ke lab komputer' },
  { id: 'toilet-disabilitas-lt1', lantai: '1', name: 'Toilet Disabilitas', icon: '♿', color: '#6b7280', description: 'Navigasi ke toilet disabilitas lantai 1' },

  // ===== LANTAI 2 =====
  { id: 'kelas-f', lantai: '2', name: 'Ruang Kelas F', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas F' },
  { id: 'kelas-g', lantai: '2', name: 'Ruang Kelas G', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas G' },
  { id: 'kelas-h', lantai: '2', name: 'Ruang Kelas H', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas H' },
  { id: 'kelas-i', lantai: '2', name: 'Ruang Kelas I', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas I' },
  { id: 'kelas-j', lantai: '2', name: 'Ruang Kelas J', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas J' },
  { id: 'kelas-k', lantai: '2', name: 'Ruang Kelas K', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas K' },
  { id: 'kelas-l', lantai: '2', name: 'Ruang Kelas L', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas L' },
  { id: 'toilet-disabilitas-lt2', lantai: '2', name: 'Toilet Disabilitas', icon: '♿', color: '#6b7280', description: 'Navigasi ke toilet disabilitas lantai 2' },
  { id: 'ruang-ekskul', lantai: '2', name: 'Ruang Ekstrakurikuler', icon: '🏢', color: '#c52252', description: 'Navigasi ke ruang ekstrakurikuler' },
  { id: 'ruang-osis', lantai: '2', name: 'Ruang OSIS', icon: '🏢', color: '#c52252', description: 'Navigasi ke ruang OSIS' },

  // ===== LANTAI 3 =====
  { id: 'kelas-m', lantai: '3', name: 'Ruang Kelas M', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas M' },
  { id: 'kelas-n', lantai: '3', name: 'Ruang Kelas N', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas N' },
  { id: 'kelas-o', lantai: '3', name: 'Ruang Kelas O', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas O' },
  { id: 'kelas-p', lantai: '3', name: 'Ruang Kelas P', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas P' },
  { id: 'kelas-q', lantai: '3', name: 'Ruang Kelas Q', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas Q' },
  { id: 'kelas-r', lantai: '3', name: 'Ruang Kelas R', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas R' },
  { id: 'kelas-s', lantai: '3', name: 'Ruang Kelas S', icon: '🏫', color: '#3b82f6', description: 'Navigasi ke kelas S' },
  { id: 'toilet-disabilitas-lt3', lantai: '3', name: 'Toilet Disabilitas', icon: '♿', color: '#6b7280', description: 'Navigasi ke toilet disabilitas lantai 3' },
  { id: 'perpustakaan', lantai: '3', name: 'Perpustakaan', icon: '📚', color: '#22c55e', description: 'Navigasi ke perpustakaan' }
];

  return (
    <div className="home-page relative">
    <Header />
    <HeroSection />
    <LocationGrid locations={locations} onNavigate={onNavigate} />
    <div className="bottom-2 text-xs text-gray-500 flex justify-end bg-[#f8fafc] items-center mt-8">
      © 2026 Ir. Hans Dermawan, S.Pd., M.T. - Teknik Sipil, Fakultas Teknologi Cerdas - UKRIDA
    </div>
  </div>
  );
}

export default HomePage;