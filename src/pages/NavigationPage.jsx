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
  // ===== LANTAI DASAR =====
  'pintu-masuk': {
    title: 'Pintu Masuk',
    startPoint: 'Depan Sekolah',
    destination: 'Pintu Masuk Utama',
    accessType: 'Kursi Roda + Tactile Paving',
    steps: [
      { step: 1, instruction: 'Masuk dari pintu masuk utama sekolah.' },
      { step: 2, instruction: 'Area pintu masuk sudah rata dan dapat diakses kursi roda.' }
    ],
    time: '< 1 menit',
    features: ['Pintu otomatis/manual', 'Lantai datar', 'Area luas'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'meja-piket-guru': {
    title: 'Navigasi ke Meja Piket Guru (Lt. Dasar)',
    startPoint: 'Pintu Masuk',
    destination: 'Meja Piket Guru',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Masuk dari pintu masuk utama.' },
      { step: 2, instruction: 'Meja piket guru terletak langsung di sebelah kanan pintu masuk.' },
      { step: 3, instruction: 'Akses mudah dari area masuk.' }
    ],
    time: '< 1 menit',
    features: ['Sangat dekat', 'Lantai datar', 'Area luas'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'lift-utama': {
    title: 'Navigasi ke Lift Utama (Lt. Dasar)',
    startPoint: 'Pintu Masuk',
    destination: 'Lift Ke Lantai 1, 2, 3',
    accessType: 'Kursi Roda + Tactile Paving',
    steps: [
      { step: 1, instruction: 'Masuk dari pintu masuk utama.' },
      { step: 2, instruction: 'Lewati meja piket guru di sebelah kanan.' },
      { step: 3, instruction: 'Jalan lurus mengikuti koridor utama ke arah timur.' },
      { step: 4, instruction: 'Belok kanan di ujung koridor.' },
      { step: 5, instruction: 'Lift utama berada di sisi kanan bangunan.' }
    ],
    time: '2-3 menit',
    features: ['Lantai datar', 'Tanpa tangga', 'Akses kursi roda penuh', 'Tactile paving tersedia'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'kelas-a': {
    title: 'Navigasi ke Ruang Kelas A (Lt. Dasar)',
    startPoint: 'Pintu Masuk',
    destination: 'Ruang Kelas A',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Masuk dari pintu masuk utama.' },
      { step: 2, instruction: 'Jalan lurus barat.' },
      { step: 3, instruction: 'Mentok belok ke kiri.' },
    ],
    time: '2-3 menit',
    features: ['Lantai datar', 'Koridor luas', 'Akses mudah'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'kelas-b': {
    title: 'Navigasi ke Ruang Kelas B (Lt. Dasar)',
    startPoint: 'Pintu Masuk',
    destination: 'Ruang Kelas B',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Masuk dari pintu masuk utama.' },
      { step: 2, instruction: 'Jalan lurus.' },
      { step: 3, instruction: 'Mentok belok ke kanan' },
    ],
    time: '2-3 menit',
    features: ['Lantai datar', 'Koridor luas', 'Dekat kelas A'],
    mapUrl: '/images/lantai_dasar.png'
  },

  // ===== LANTAI 1 =====
  'lift-lt1': {
    title: 'Lift Lantai 1',
    startPoint: 'Lift Lantai Dasar',
    destination: 'Lift Lantai 1',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift dari lantai dasar ke lantai 1.' },
      { step: 2, instruction: 'Lift beroperasi normal dengan akses penuh untuk kursi roda.' }
    ],
    time: '< 1 menit',
    features: ['Lift akses penuh', 'Luas'],
    mapUrl: '/images/lantai_1.png'
  },
  'kelas-c': {
    title: 'Navigasi ke Ruang Kelas C (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Ruang Kelas C',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor utama, ketika mentok belok ke kiri.' },
      { step: 5, instruction: 'Kelas C berada di bagian paling kiri.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_1.png'
  },
  'kelas-d': {
    title: 'Navigasi ke Ruang Kelas D (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Ruang Kelas D',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor utama, ketika mentok belok ke kiri.' },
      { step: 5, instruction: 'Kelas D berada di bagian tengah.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_1.png'
  },
  'kelas-e': {
    title: 'Navigasi ke Ruang Kelas E (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Ruang Kelas E',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor utama, ketika mentok belok ke kanan.' },
      { step: 5, instruction: 'Kelas E berada di bagian paling kanan.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-kimia': {
    title: 'Navigasi ke Lab Kimia (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Kimia',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor.' },
      { step: 5, instruction: 'Lab Kimia merupakan Lab pertama dari lift.' }
    ],
    time: '2-3 menit',
    features: ['Akses mudah', 'Koridor lurus', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-biologi': {
    title: 'Navigasi ke Lab Biologi (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Biologi',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor.' },
      { step: 5, instruction: 'Lab Biologi merupakan Lab kedua dari lift.' }
    ],
    time: '2-3 menit',
    features: ['Dekat Lab Kimia', 'Koridor lurus', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-fisika': {
    title: 'Navigasi ke Lab Fisika (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Fisika',
    accessType: 'Kursi Roda',
    steps: [
     { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor.' },
      { step: 5, instruction: 'Lab Fisika merupakan Lab ketiga dari lift.' }
    ],
    time: '3 menit',
    features: ['Koridor panjang', 'Akses mudah', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-komputer': {
    title: 'Navigasi ke Lab Komputer (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Komputer',
    accessType: 'Kursi Roda',
    steps: [
     { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor.' },
      { step: 5, instruction: 'Lab Komputer merupakan Lab keempat dari lift.' }
    ],
    time: '2-3 menit',
    features: ['Akses mudah', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'toilet-disabilitas-lt1': {
    title: 'Navigasi ke Toilet Disabilitas (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Toilet Disabilitas',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor.' },
      { step: 5, instruction: 'Toilet Disabilitas berada di ujung koridor, dekat dengan tangga.' }
    ],
    time: '< 5 menit ',
    features: ['Sangat dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_1.png'
  },

  // ===== LANTAI 2 =====

  'kelas-f': {
    title: 'Navigasi ke Ruang Kelas F (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas F',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor sampai mentok.' },
      { step: 5, instruction: 'Kelas F berada di bagian paling kiri .' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-g': {
    title: 'Navigasi ke Ruang Kelas G (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas G',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor sampai mentok.' },
      { step: 5, instruction: 'Kelas G berada di bagian tengah.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-h': {
    title: 'Navigasi ke Ruang Kelas H (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas H',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti koridor sampai mentok.' },
      { step: 5, instruction: 'Kelas H berada di bagian paling kanan.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-i': {
    title: 'Navigasi ke Ruang Kelas I (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas I',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor, kelas i merupakan kelas pertama.' },
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-j': {
    title: 'Navigasi ke Ruang Kelas J (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas J',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Jalan lurus mengikuti koridor.' },
      { step: 5, instruction: 'Kelas J berada setelah kelas I.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-k': {
    title: 'Navigasi ke Ruang Kelas K (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas K',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Jalan lurus mengikuti koridor.' },
      { step: 5, instruction: 'Kelas K berada setelah kelas J, dan I.' }
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-l': {
    title: 'Navigasi ke Ruang Kelas L (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas L',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Jalan lurus mengikuti koridor utama.' },
      { step: 5, instruction: 'Kelas L merupakan kelas nomor 4 setelah kelas K.' }
    ],
    time: '3 menit',
    features: ['Koridor lurus', 'Lantai datar', 'Ujung blok'],
    mapUrl: '/images/lantai_2.png'
  },
  'toilet-disabilitas-lt2': {
    title: 'Navigasi ke Toilet Disabilitas (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Toilet Disabilitas',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Belok ke kiri dari lift.' },
      { step: 4, instruction: 'Ikuti koridor sampai menemukan toilet disabilitas, pada ujung koridor.' }
    ],
    time: '≤ 1 menit',
    features: ['Dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_2.png'
  },
  'ruang-ekskul': {
    title: 'Navigasi ke Ruang Ekstrakurikuler (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Ekstrakurikuler',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift (menuju timur).' },
      { step: 4, instruction: 'Ikuti koridor ke area timur lantai 2.' },
      { step: 5, instruction: 'Ruang Ekstrakurikuler berada di blok timur lantai 2.' }
    ],
    time: '2-3 menit',
    features: ['Akses mudah', 'Koridor lurus', 'Area khusus'],
    mapUrl: '/images/lantai_2.png'
  },
  'ruang-osis': {
    title: 'Navigasi ke Ruang OSIS (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang OSIS',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift menuju area timur.' },
      { step: 4, instruction: 'Ikuti koridor timur hingga menemukan Ruang OSIS.' },
      { step: 5, instruction: 'Ruang OSIS berada di blok timur lantai 2, berdekatan dengan ruang ekstrakurikuler.' }
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Area khusus', 'Dekat dengan ruang ekstrakurikuler'],
    mapUrl: '/images/lantai_2.png'
  },

  // ===== LANTAI 3 =====
  'kelas-m': {
    title: 'Navigasi ke Ruang Kelas M (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas M',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti sampai mentok. lalu belok kiri' },
      { step: 5, instruction: 'Kelas M berada di bagian kiri pada ujung koridor.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-n': {
    title: 'Navigasi ke Ruang Kelas N (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas N',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti sampai mentok. lalu belok kiri' },
      { step: 5, instruction: 'Kelas N berada di bagian tengah pada ujung koridor.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-o': {
    title: 'Navigasi ke Ruang Kelas O (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas O',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kanan dari lift.' },
      { step: 4, instruction: 'Ikuti sampai mentok. lalu belok kanan' },
      { step: 5, instruction: 'Kelas O berada di bagian kanan pada ujung koridor.' }
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-p': {
    title: 'Navigasi ke Ruang Kelas P (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas P',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'kelas P kelas pertama yang muncul setelah Lift' },
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-q': {
    title: 'Navigasi ke Ruang Kelas Q (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas Q',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'kelas Q kelas kedua yang muncul setelah Lift' },
    ],
    time: '2-3 menit',
    features: ['Dekat lift', 'Koridor lurus'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-r': {
    title: 'Navigasi ke Ruang Kelas R (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas R',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'kelas R kelas ketiga yang muncul setelah Lift' },
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-s': {
    title: 'Navigasi ke Ruang Kelas S (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas S',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'kelas S kelas keempat yang muncul setelah Lift' },
    ],
    time: '3 menit',
    features: ['Koridor lurus', 'Lantai datar', 'Ujung blok'],
    mapUrl: '/images/lantai_3.png'
  },
  'toilet-disabilitas-lt3': {
    title: 'Navigasi ke Toilet Disabilitas (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Toilet Disabilitas',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Toilet disabilitas berada di ujung koridor kiri, sebelum koridor membelok.' },
    ],
    time: '3  menit',
    features: ['Dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_3.png'
  },
  'perpustakaan': {
    title: 'Navigasi ke Perpustakaan (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Perpustakaan',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Naik lift ke lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' },
      { step: 3, instruction: 'Ambil arah kiri dari lift.' },
      { step: 4, instruction: 'Koridor akan membelok ke kiri' },
      { step: 5, instruction: 'Ikuti belokan dan perpustakaan ada di bagian paling akhir koridor.' }
    ],
    time: '3-4 menit',
    features: ['Koridor panjang', 'Akses mudah', 'Area khusus untuk perpustakaan'],
    mapUrl: '/images/lantai_3.png'
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
      <div className="bottom-2 text-xs text-gray-500 flex justify-end bg-[#f8fafc] items-center mt-8">
      © 2026 Ir. Hans Dermawan, S.Pd., M.T. - Teknik Sipil, Fakultas Teknologi Cerdas - UKRIDA
      </div>
    </div>
  );
}

export default NavigationPage;