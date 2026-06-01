import React from 'react';
import { RefreshCw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import useRobotStore from '../../store/useRobotStore';

const Controls = () => {
  const { isEmergencyStop, toggleEmergencyStop, activeKeys } = useRobotStore();

  return (
    <div className="flex flex-col items-end gap-8">
      
      {/* Emergency Stop Button */}
      <button 
        onClick={toggleEmergencyStop}
        aria-label={isEmergencyStop ? "Release Emergency Stop" : "Trigger Emergency Stop"}
        aria-pressed={isEmergencyStop}
        className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all group relative ${isEmergencyStop ? 'bg-red-800 border-4 border-red-900 scale-95' : 'bg-yellow-400 border-4 border-yellow-500'}`}
      >
        <div className={`w-20 h-20 rounded-full border-[6px] flex items-center justify-center shadow-inner absolute transition-colors ${isEmergencyStop ? 'bg-red-900 border-red-950' : 'bg-red-600 border-red-700'}`}>
          <RefreshCw size={28} className={`text-white transition-transform ${isEmergencyStop ? 'opacity-50' : 'group-hover:rotate-180'}`} />
        </div>
        {!isEmergencyStop && (
          <svg aria-hidden="true" viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-80 pointer-events-none">
            <path id="curve" d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" fill="transparent" />
            <text className="text-[10px] font-black fill-slate-800 tracking-widest">
              <textPath href="#curve" startOffset="0%">EMERGENCY</textPath>
              <textPath href="#curve" startOffset="50%">STOP</textPath>
            </text>
          </svg>
        )}
      </button>

      {/* D-Pad / Joystick */}
      <div className={`w-32 h-32 rounded-full shadow-2xl border p-2 relative transition-colors ${isEmergencyStop ? 'bg-slate-900 border-slate-800 opacity-50 cursor-not-allowed' : 'bg-[#1e2330] border-slate-700/50'}`}>
        <button disabled={isEmergencyStop} aria-label="Move Forward" className={`absolute top-2 left-1/2 -translate-x-1/2 transition-all duration-75 p-1 disabled:hover:text-white/50 ${activeKeys.w && !isEmergencyStop ? 'text-blue-400 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white/50 hover:text-white'}`}>
          <ChevronUp size={20} />
        </button>
        <button disabled={isEmergencyStop} aria-label="Move Backward" className={`absolute bottom-2 left-1/2 -translate-x-1/2 transition-all duration-75 p-1 disabled:hover:text-white/50 ${activeKeys.s && !isEmergencyStop ? 'text-blue-400 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white/50 hover:text-white'}`}>
          <ChevronDown size={20} />
        </button>
        <button disabled={isEmergencyStop} aria-label="Move Left" className={`absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-75 p-1 disabled:hover:text-white/50 ${activeKeys.a && !isEmergencyStop ? 'text-blue-400 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white/50 hover:text-white'}`}>
          <ChevronLeft size={20} />
        </button>
        <button disabled={isEmergencyStop} aria-label="Move Right" className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-75 p-1 disabled:hover:text-white/50 ${activeKeys.d && !isEmergencyStop ? 'text-blue-400 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white/50 hover:text-white'}`}>
          <ChevronRight size={20} />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center justify-center text-[10px] font-bold text-white/40">
            <div className={`mb-4 transition-colors ${activeKeys.w && !isEmergencyStop ? 'text-blue-400' : ''}`}>W</div>
            <div className="flex gap-6 w-full justify-center absolute">
              <span className={`transition-colors ${activeKeys.a && !isEmergencyStop ? 'text-blue-400' : ''}`}>A</span>
              <span className={`transition-colors ${activeKeys.d && !isEmergencyStop ? 'text-blue-400' : ''}`}>D</span>
            </div>
            <div className={`mt-4 transition-colors ${activeKeys.s && !isEmergencyStop ? 'text-blue-400' : ''}`}>S</div>
            <div className="absolute text-[8px] text-white/20 mt-1">x +<br/>y</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Controls;
