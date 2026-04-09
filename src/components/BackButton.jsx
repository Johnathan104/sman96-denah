import React from 'react';
import '../css/BackButton.css';

function BackButton({ onClick }) {
  return (
    <button 
      className="back-button inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600
       hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
       h-[100px] w-[100px]
       " 
      onClick={onClick}
      aria-label="Kembali ke menu utama"
    >
      <span className="text-[40px]">←</span>
    </button>
  );
}

export default BackButton;