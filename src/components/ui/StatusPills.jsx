import React from 'react';
import { Pause, ArrowRight, Battery, Signal, ChevronRight } from 'lucide-react';

const StatusPills = () => {
  return (
    <div className="flex justify-between items-start pointer-events-auto">
      
      {/* Top Left - Mission Status */}
      <div className="flex flex-col gap-3">
        <div className="bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 flex items-center gap-4">
          <div className="text-sm">
            <span className="text-slate-400 font-medium mr-2">Status</span>
            <span className="font-bold text-slate-800">On Mission 1234</span>
          </div>
          <button className="bg-slate-800 text-white rounded-full p-1.5 hover:bg-slate-700 transition-colors">
            <Pause size={14} fill="currentColor" />
          </button>
        </div>
        <button className="bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 flex items-center justify-between font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors w-40">
          QUICK GOAL
          <div className="bg-slate-800 text-white rounded-full p-1">
            <ArrowRight size={14} />
          </div>
        </button>
      </div>

      {/* Top Center - System Telemetry */}
      <div className="flex flex-col items-center gap-3">
        <div className="bg-[#1e2330] rounded-full px-6 py-3 shadow-xl flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 font-bold text-white">
            100% <Battery size={16} className="text-green-400" fill="currentColor" />
          </div>
          <div className="flex items-center gap-2 text-yellow-500 font-bold">
            <Signal size={16} /> Strong
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            Failsafe <span className="font-bold text-white flex items-center gap-1">Okay <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            System <span className="font-bold text-white flex items-center gap-1">Okay <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span></span>
          </div>
        </div>
        <button className="bg-[#2a3040] text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md border border-slate-600 hover:bg-[#343b4e] transition-colors">
          Map View
        </button>
      </div>

      {/* Top Right - Mode & Actions */}
      <div className="flex flex-col items-end gap-3">
        <div className="bg-white rounded-full p-1 shadow-md border border-slate-200 flex items-center">
          <span className="text-sm font-bold text-slate-400 px-3">MODE</span>
          <button className="bg-slate-800 text-white rounded-full px-4 py-1.5 text-sm font-bold shadow-sm">
            AUTO
          </button>
          <button className="text-slate-600 rounded-full px-4 py-1.5 text-sm font-bold hover:bg-slate-100 transition-colors">
            MANUAL
          </button>
        </div>
        <button className="bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 flex items-center gap-3 font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors">
          INITIATE
          <div className="bg-slate-800 text-white rounded-full p-1">
            <ArrowRight size={14} />
          </div>
        </button>
      </div>

    </div>
  );
};

export default StatusPills;
