import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import { Mic2Icon, X, PlayIcon, StopCircle } from 'lucide-react';
import navigationData from '../pages/navigationData';
import audioToNavigationMap from '../pages/audioToNavigationMap';

// ================= FLOOR ROOMS =================
const floorRoomList = {
  "0": ["pintu-masuk","meja-piket-guru","lift-utama","kelas-a","kelas-b"],
  "1": ["lift-lt1","kelas-c","kelas-d","kelas-e","lab-kimia","lab-biologi","lab-fisika","lab-komputer","toilet-disabilitas-lt1"],
  "2": ["lift-lt2","kelas-f","kelas-g","kelas-h","kelas-i","kelas-j","kelas-k","kelas-l","toilet-disabilitas-lt2","ruang-ekskul","ruang-osis"],
  "3": ["lift-lt3","kelas-m","kelas-n","kelas-o","kelas-p","kelas-q","kelas-r","kelas-s","toilet-disabilitas-lt3","perpustakaan"]
};

// ================= REVERSE MAP =================
const navigationToAudioMap = Object.fromEntries(
  Object.entries(audioToNavigationMap).map(([audio, nav]) => [nav, audio])
);

// ================= IMPORT AUDIO =================
// ⚠️ Yes this is long — but stable with bundlers

// VOICE PROMPTS
import ask_floor from '../assets/navigation_audio/ask_floor.mp3';
import ask_room_floor_0 from '../assets/navigation_audio/ask_room_floor_0.mp3';
import ask_room_floor_1 from '../assets/navigation_audio/ask_room_floor_1.mp3';
import ask_room_floor_2 from '../assets/navigation_audio/ask_room_floor_2.mp3';
import ask_room_floor_3 from '../assets/navigation_audio/ask_room_floor_3.mp3';

// DESTINATION AUDIO
import dasar_pintu_masuk from '../assets/navigation_audio/dasar_pintu_masuk.mp3';
import dasar_meja_piket from '../assets/navigation_audio/dasar_meja_piket.mp3';
import dasar_lift from '../assets/navigation_audio/dasar_lift.mp3';
import dasar_kelas_a from '../assets/navigation_audio/dasar_kelas_a.mp3';
import dasar_kelas_b from '../assets/navigation_audio/dasar_kelas_b.mp3';

import lt1_lift from '../assets/navigation_audio/lt1_lift.mp3';
import lt1_kelas_c from '../assets/navigation_audio/lt1_kelas_c.mp3';
import lt1_kelas_d from '../assets/navigation_audio/lt1_kelas_d.mp3';
import lt1_kelas_e from '../assets/navigation_audio/lt1_kelas_e.mp3';
import lt1_lab_kimia from '../assets/navigation_audio/lt1_lab_kimia.mp3';
import lt1_lab_biologi from '../assets/navigation_audio/lt1_lab_biologi.mp3';
import lt1_lab_fisika from '../assets/navigation_audio/lt1_lab_fisika.mp3';
import lt1_lab_komputer from '../assets/navigation_audio/lt1_lab_komputer.mp3';
import lt1_toilet_disabilitas from '../assets/navigation_audio/lt1_toilet_disabilitas.mp3';

import lt2_lift from '../assets/navigation_audio/lt2_lift.mp3';
import lt2_kelas_f from '../assets/navigation_audio/lt2_kelas_f.mp3';
import lt2_kelas_g from '../assets/navigation_audio/lt2_kelas_g.mp3';
import lt2_kelas_h from '../assets/navigation_audio/lt2_kelas_h.mp3';
import lt2_kelas_i from '../assets/navigation_audio/lt2_kelas_i.mp3';
import lt2_kelas_j from '../assets/navigation_audio/lt2_kelas_j.mp3';
import lt2_kelas_k from '../assets/navigation_audio/lt2_kelas_k.mp3';
import lt2_kelas_l from '../assets/navigation_audio/lt2_kelas_l.mp3';
import lt2_toilet_disabilitas from '../assets/navigation_audio/lt2_toilet_disabilitas.mp3';
import lt2_ruang_ekskul from '../assets/navigation_audio/lt2_ruang_ekskul.mp3';
import lt2_ruang_osis from '../assets/navigation_audio/lt2_ruang_osis.mp3';

import lt3_lift from '../assets/navigation_audio/lt3_lift.mp3';
import lt3_kelas_m from '../assets/navigation_audio/lt3_kelas_m.mp3';
import lt3_kelas_n from '../assets/navigation_audio/lt3_kelas_n.mp3';
import lt3_kelas_o from '../assets/navigation_audio/lt3_kelas_o.mp3';
import lt3_kelas_p from '../assets/navigation_audio/lt3_kelas_p.mp3';
import lt3_kelas_q from '../assets/navigation_audio/lt3_kelas_q.mp3';
import lt3_kelas_r from '../assets/navigation_audio/lt3_kelas_r.mp3';
import lt3_kelas_s from '../assets/navigation_audio/lt3_kelas_s.mp3';
import lt3_toilet_disabilitas from '../assets/navigation_audio/lt3_toilet_disabilitas.mp3';
import lt3_perpustakaan from '../assets/navigation_audio/lt3_perpustakaan.mp3';

// ================= AUDIO FILE MAP =================
const audioFiles = {
  // PROMPTS
  ask_floor,
  ask_room_floor_0,
  ask_room_floor_1,
  ask_room_floor_2,
  ask_room_floor_3,
  
  // DESTINATIONS
  dasar_pintu_masuk,
  dasar_meja_piket,
  dasar_lift,
  dasar_kelas_a,
  dasar_kelas_b,
  lt1_lift,
  lt1_kelas_c,
  lt1_kelas_d,
  lt1_kelas_e,
  lt1_lab_kimia,
  lt1_lab_biologi,
  lt1_lab_fisika,
  lt1_lab_komputer,
  lt1_toilet_disabilitas,
  lt2_lift,
  lt2_kelas_f,
  lt2_kelas_g,
  lt2_kelas_h,
  lt2_kelas_i,
  lt2_kelas_j,
  lt2_kelas_k,
  lt2_kelas_l,
  lt2_toilet_disabilitas,
  lt2_ruang_ekskul,
  lt2_ruang_osis,
  lt3_lift,
  lt3_kelas_m,
  lt3_kelas_n,
  lt3_kelas_o,
  lt3_kelas_p,
  lt3_kelas_q,
  lt3_kelas_r,
  lt3_kelas_s,
  lt3_toilet_disabilitas,
  lt3_perpustakaan
};

// ================= PLAY FUNCTION =================
const playNavigationAudio = (navigationId) => {
  const audioKey = navigationToAudioMap[navigationId];
  const audioSrc = audioFiles[audioKey];

  
  if (!audioSrc) {
    console.warn("No audio for:", navigationId);
    return;
  }

  const audio = new Audio(audioSrc);
  audio.play().catch(err => console.error(err));
  return audio;
};

// ================= COMPONENT =================
function VoiceAssistanceModal({ isOpen, onClose }) {
  const replayCurrentAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.error(err));
      return;
    }

    // fallback if no audio is loaded yet
    if (state === 'start') {
      playAudioImmediate(audioFiles.ask_floor);
    } else if (state === 'askingRoom') {
      const floorAudioKey = `ask_room_floor_${floor}`;
      playAudioImmediate(audioFiles[floorAudioKey]);
    } else if (state === 'done' && room) {
      playAudioImmediate(audioFiles[navigationToAudioMap[room]]);
    }
  };
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorder = useRef(null)
  const mediaStream = useRef(null)
  const chunks = useRef([]);
  
  const [floor, setFloor] = useState(null);
  const [room, setRoom] = useState(null);
  const [state, setState] = useState('start');
  const audioRef = useRef(null);

  // ✅ PLAY AUDIO IMMEDIATELY WHEN MODAL OPENS
  useEffect(() => {
    if (isOpen && state === 'start') {
      playAudioImmediate(audioFiles.ask_floor);
    }
  }, [isOpen]);

  // ✅ PLAY AUDIO WHEN FLOOR IS SELECTED
  useEffect(() => {
    if (state === 'askingRoom' && floor !== null) {
      const floorAudioKey = `ask_room_floor_${floor}`;
      const floorAudio = audioFiles[floorAudioKey];
      playAudioImmediate(floorAudio);
    }
  }, [state, floor]);

  const playAudioImmediate = (audioSrc) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    audio.play().catch(err => console.error("Audio play error:", err));
  };

  // ✅ SEND AUDIO TO API FOR RECOGNITION
  const sendAudioToAPI = async (audioBlob) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'audio.wav');

      const response = await fetch('https://jmse.pythonanywhere.com/recognize', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        const recognizedNumber = data.number;
        console.log(data)
        if (state === 'start') {
          // Floor recognition
          const floorValue = recognizedNumber.toString();
          if (['0', '1', '2', '3'].includes(floorValue)) {
            setFloor(floorValue);
            setState('askingRoom');
          } else {
            alert(`Invalid floor: ${recognizedNumber}. Please try again.`);
          }
        } 
        else if (state === 'askingRoom') {
          // Room selection by index
          const roomList = floorRoomList[floor];
          if (recognizedNumber >= 0 && recognizedNumber < roomList.length) {
            const selectedRoom = roomList[recognizedNumber];
            setRoom(selectedRoom);
            setState('done');

            // 🔊 PLAY NAVIGATION AUDIO AFTER ROOM SELECTED
            playAudioImmediate(audioFiles[navigationToAudioMap[selectedRoom]]);

            console.log('FULL DATA:', navigationData[selectedRoom]);
          } else {
            alert(`Invalid room number: ${recognizedNumber}. Please try again.`);
          }
        }
      } else {
        alert(`Recognition failed: ${data.error || 'Unknown error'}`);
        console.log('API Response:', data);
      }
    } catch (error) {
      console.error('API Error:', error);
      alert(`Error sending audio: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  async function startRecording() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);
      chunks.current = [];
      
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      }  
      
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: 'audio/wav' });
        sendAudioToAPI(recordedBlob);
        chunks.current = [];
      }
      
      mediaRecorder.current.start();
    } catch (e) {
      console.error('Microphone access error:', e);
      alert('Could not access microphone: ' + e.message);
      setIsRecording(false);
    }
  }

  async function stopRecording() {
    setIsRecording(false);
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      mediaStream.current.getTracks().forEach(track => track.stop());
    }
  }

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setFloor(null);
    setRoom(null);
    setState('start');
    playAudioImmediate(audioFiles.ask_floor);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg shadow-xl w-full h-full max-w-4xl max-h-[90vh] flex flex-col">

        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold">Voice Assistant</h1>
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <div className="flex items-center justify-center text-center px-6">
          
          <p className="text-2xl">
            {state === 'start' && 'Which floor do you want to go to?'}

            {state === 'askingRoom' && (
              <>
                Which room?
                <br />
                <span className="text-blue-500 text-lg">
                  {floorRoomList[floor].map((room, i) => `${i}. ${room}`).join(', ')}
                </span>
              </>
            )}

            {state === 'done' && (
              <>
                ✅ Destination:
                <br />
                <span className="text-green-600 font-bold">
                  {navigationData[room]?.title}
                </span>
              </>
            )}

            {isProcessing && (
              <span className="text-gray-500 italic">
                Processing audio...
              </span>
            )}
          </p>
        </div>

        <div className="flex  flex-grow justify-center ">
          <div className="flex flex-grow justify-center">
            {/* ⏪ REWIND BUTTON */}
            <button
              onClick={replayCurrentAudio}
              disabled={isProcessing}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 flex items-center justify-center transition-all disabled:opacity-50"
            >
              <PlayIcon size={80} className="text-white rotate-180" />
            </button>

            {/* 🎤 RECORD BUTTON */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isProcessing}
              className={`w-full flex items-center justify-center transition-all disabled:opacity-50 ${
                isRecording
                  ? 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800'
                  : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
              }`}
            >
              {isRecording ? (
                <StopCircle size={80} className="text-white" />
              ) : (
                <Mic2Icon size={80} className="text-white" />
              )}
            </button>

          </div>
          {/* {state === 'done' && (
            <button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full px-8 py-4 text-white font-semibold transition-all"
            >
              Start Over
            </button>
          )}
          
          {state !== 'done' && (
            isRecording ? (
              <button 
                onClick={stopRecording}
                disabled={isProcessing}
                className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 rounded-full p-20 transition-all disabled:opacity-50"
              >
                <StopCircle size={80} className="text-white" />
              </button>
            ) : (
              <button
                onClick={startRecording}
                disabled={isProcessing}
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full p-20 transition-all disabled:opacity-50"
              >
                <Mic2Icon size={80} className="text-white" />
              </button>
            )
          )} */}
        </div>

      </div>
    </div>
  );
}

export default VoiceAssistanceModal;