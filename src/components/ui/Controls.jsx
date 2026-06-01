import React from 'react';
import { RefreshCw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Controls = () => {
  return (
    <div className="flex flex-col items-end gap-8">
      
      {/* Emergency Stop Button */}
      <button className="w-24 h-24 rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center shadow-xl active:scale-95 transition-transform group relative">
        <div className="w-20 h-20 rounded-full bg-red-600 border-[6px] border-red-700 flex items-center justify-center shadow-inner absolute">
          <RefreshCw size={28} className="text-white" />
        </div>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-80 pointer-events-none">
          <path id="curve" d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" fill="transparent" />
          <text className="text-[10px] font-black fill-slate-800 tracking-widest">
            <textPath href="#curve" startOffset="0%">EMERGENCY</textPath>
            <textPath href="#curve" startOffset="50%">STOP</textPath>
          </text>
        </svg>
      </button>

      {/* D-Pad / Joystick */}
      <div className="w-32 h-32 rounded-full bg-[#1e2330] shadow-2xl border border-slate-700/50 p-2 relative">
        <button className="absolute top-2 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors p-1">
          <ChevronUp size={20} />
        </button>
        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors p-1">
          <ChevronDown size={20} />
        </button>
        <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1">
          <ChevronRight size={20} />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center justify-center text-[10px] font-bold text-white/40">
            <div className="mb-4">W</div>
            <div className="flex gap-6 w-full justify-center absolute">
              <span>A</span>
              <span>D</span>
            </div>
            <div className="mt-4">S</div>
            <div className="absolute text-[8px] text-white/20 mt-1">x +<br/>y</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Controls;
