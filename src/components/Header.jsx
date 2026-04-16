import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../assets/logo.png';
import ukridaLogo from '../assets/ukrida.png';
import { Mic2Icon, X } from 'lucide-react';
import VoiceAssistanceModal from './VoiceAssistantModal';



function Header() {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section flex-wrap justify-center">
              <div className="h-[78px] w-[78px] mr-4">
                <img src={logo} alt="School Logo" className="" />
              </div>
              <div className="h-[78px] flex flex-col items-center justify-center mr-4">
                <img src={ukridaLogo} className="h-[60px] w-[60px]" alt="Ukrida Logo" />
                <span className="text-[10px] text-[#444474]"> Teknik Sipil - FTC UKRIDA</span>
              </div>
              <div className="header-text flex-row items-center justify-center">

                <span className="text-[30px] text-[#444474]  leading-tight border-b border-[#444474] pb-1 font-bold">
                  SMAN 96 Jakarta
                </span>
                <p className="school-subtitle text-[#444474] ">Smart Accessibility Navigation (NZEB School)</p>
              </div>
            </div>
            <div className="header-info">
              <button
                onClick={() => setIsVoiceModalOpen(true)}
                className="voice-badge hover:bg-opacity-80 transition-all cursor-pointer w-full h-[100px]"
              >
                <Mic2Icon size={20} className="inline mr-2" style={{ verticalAlign: 'middle' }} />
                Voice Assistance
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Voice Assistance Modal */}
      <VoiceAssistanceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
      />
    </>
  );
}

export default Header;