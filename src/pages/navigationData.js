const navigationData = {
  // ===== LANTAI DASAR =====
  'pintu-masuk': {
    title: 'Pintu Masuk',
    startPoint: 'Depan Sekolah',
    destination: 'Pintu Masuk Utama',
    accessType: 'Kursi Roda + Tactile Paving',
    steps: [
      { step: 1, instruction: 'Anda di pintu masuk.' }
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
      { step: 1, instruction: 'Lurus ke depan.' },
      { step: 2, instruction: 'Sekitar 5 meter.' },
      { step: 3, instruction: 'Meja piket di kanan.' }
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
      { step: 1, instruction: 'Lurus ke depan.' },
      { step: 2, instruction: 'Lewati meja piket.' },
      { step: 3, instruction: 'Lanjut ke ujung koridor.' },
      { step: 4, instruction: 'Belok kanan.' },
      { step: 5, instruction: 'Lift di depan.' }
    ],
    time: '2-3 menit',
    features: ['Lantai datar', 'Tanpa tangga', 'Akses kursi roda penuh', 'Tactile paving tersedia'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'kelas-a': {
    title: 'Navigasi ke Ruang Kelas A (Lt. Dasar)',
    startPoint: 'Lift',
    destination: 'Ruang Kelas A',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Dari lift.' },
      { step: 2, instruction: 'Belok kiri.' },
      { step: 3, instruction: 'Lurus sedikit.' },
      { step: 4, instruction: 'Kelas A di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Lantai datar', 'Koridor luas', 'Akses mudah'],
    mapUrl: '/images/lantai_dasar.png'
  },
  'kelas-b': {
    title: 'Navigasi ke Ruang Kelas B (Lt. Dasar)',
    startPoint: 'Lift',
    destination: 'Ruang Kelas B',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Dari lift.' },
      { step: 2, instruction: 'Belok kanan.' },
      { step: 3, instruction: 'Lurus sedikit.' },
      { step: 4, instruction: 'Kelas B di kanan.' }
    ],
    time: '1-2 menit',
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
      { step: 1, instruction: 'Anda di lantai 1.' },
      { step: 2, instruction: 'Keluar dari lift.' }
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
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Kelas C di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_1.png'
  },
  'kelas-d': {
    title: 'Navigasi ke Ruang Kelas D (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Ruang Kelas D',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Kelas D di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_1.png'
  },
  'kelas-e': {
    title: 'Navigasi ke Ruang Kelas E (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Ruang Kelas E',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Ke ujung koridor.' },
      { step: 3, instruction: 'Kelas E di depan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Lab kimia di kanan.' }
    ],
    time: '1-2 menit',
    features: ['Akses mudah', 'Koridor lurus', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-biologi': {
    title: 'Navigasi ke Lab Biologi (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Biologi',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Lab biologi di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Lab fisika di kanan.' }
    ],
    time: '2-3 menit',
    features: ['Koridor panjang', 'Akses mudah', 'Area laboratorium'],
    mapUrl: '/images/lantai_1.png'
  },
  'lab-komputer': {
    title: 'Navigasi ke Lab Komputer (Lt. 1)',
    startPoint: 'Lift Lt. 1',
    destination: 'Lab Komputer',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Ke ujung koridor.' },
      { step: 3, instruction: 'Lab komputer di depan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Ke ujung.' },
      { step: 3, instruction: 'Toilet di depan.' }
    ],
    time: '< 1 menit',
    features: ['Sangat dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_1.png'
  },

  // ===== LANTAI 2 =====
  'lift-lt2': {
    title: 'Lift Lantai 2',
    startPoint: 'Lift Lantai Dasar',
    destination: 'Lift Lantai 2',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Anda di lantai 2.' },
      { step: 2, instruction: 'Keluar dari lift.' }
    ],
    time: '< 1 menit',
    features: ['Lift akses penuh', 'Luas'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-f': {
    title: 'Navigasi ke Ruang Kelas F (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas F',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Kelas F di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-g': {
    title: 'Navigasi ke Ruang Kelas G (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas G',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Kelas G di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-h': {
    title: 'Navigasi ke Ruang Kelas H (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas H',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Ke ujung koridor.' },
      { step: 3, instruction: 'Kelas H di depan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Kelas I di kanan.' }
    ],
    time: '1-2 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_2.png'
  },
  'kelas-j': {
    title: 'Navigasi ke Ruang Kelas J (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Kelas J',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Kelas J di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus lebih jauh.' },
      { step: 3, instruction: 'Kelas K di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Ke bagian ujung.' },
      { step: 3, instruction: 'Kelas L di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Dekat ujung.' },
      { step: 3, instruction: 'Toilet di kanan.' }
    ],
    time: '< 1 menit',
    features: ['Dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_2.png'
  },
  'ruang-ekskul': {
    title: 'Navigasi ke Ruang Ekstrakurikuler (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang Ekstrakurikuler',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Ruang ekskul di depan.' }
    ],
    time: '1-2 menit',
    features: ['Akses mudah', 'Koridor lurus', 'Area khusus'],
    mapUrl: '/images/lantai_2.png'
  },
  'ruang-osis': {
    title: 'Navigasi ke Ruang OSIS (Lt. 2)',
    startPoint: 'Lift Lt. 2',
    destination: 'Ruang OSIS',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Ruang OSIS di depan.' }
    ],
    time: '2-3 menit',
    features: ['Koridor lurus', 'Area khusus', 'Dekat dengan ruang ekstrakurikuler'],
    mapUrl: '/images/lantai_2.png'
  },

  // ===== LANTAI 3 =====
  'lift-lt3': {
    title: 'Lift Lantai 3',
    startPoint: 'Lift Lantai Dasar',
    destination: 'Lift Lantai 3',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Anda di lantai 3.' },
      { step: 2, instruction: 'Keluar dari lift.' }
    ],
    time: '< 1 menit',
    features: ['Lift akses penuh', 'Luas'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-m': {
    title: 'Navigasi ke Ruang Kelas M (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas M',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Kelas M di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-n': {
    title: 'Navigasi ke Ruang Kelas N (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas N',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Kelas N di kiri.' }
    ],
    time: '1-2 menit',
    features: ['Dekat lift', 'Koridor lurus', 'Deret dengan kelas lain'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-o': {
    title: 'Navigasi ke Ruang Kelas O (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas O',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kanan.' },
      { step: 2, instruction: 'Ke ujung koridor.' },
      { step: 3, instruction: 'Kelas O di depan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus.' },
      { step: 3, instruction: 'Kelas P di kanan.' }
    ],
    time: '1-2 menit',
    features: ['Koridor lurus', 'Lantai datar'],
    mapUrl: '/images/lantai_3.png'
  },
  'kelas-q': {
    title: 'Navigasi ke Ruang Kelas Q (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Ruang Kelas Q',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lanjut lurus.' },
      { step: 3, instruction: 'Kelas Q di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Lurus lebih jauh.' },
      { step: 3, instruction: 'Kelas R di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Ke bagian ujung.' },
      { step: 3, instruction: 'Kelas S di kanan.' }
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
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Dekat ujung.' },
      { step: 3, instruction: 'Toilet di kanan.' }
    ],
    time: '< 1 menit',
    features: ['Dekat dari lift', 'Akses penuh kursi roda', 'Fasilitas lengkap'],
    mapUrl: '/images/lantai_3.png'
  },
  'perpustakaan': {
    title: 'Navigasi ke Perpustakaan (Lt. 3)',
    startPoint: 'Lift Lt. 3',
    destination: 'Perpustakaan',
    accessType: 'Kursi Roda',
    steps: [
      { step: 1, instruction: 'Belok kiri.' },
      { step: 2, instruction: 'Ke ujung.' },
      { step: 3, instruction: 'Perpustakaan di depan.' }
    ],
    time: '2-3 menit',
    features: ['Koridor panjang', 'Akses mudah', 'Area khusus untuk perpustakaan'],
    mapUrl: '/images/lantai_3.png'
  }
};

export default navigationData;