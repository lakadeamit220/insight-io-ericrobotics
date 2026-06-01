import React from 'react';
import { Pause, ArrowRight, Battery, Signal, ChevronRight, AlertTriangle } from 'lucide-react';
import useRobotStore from '../../store/useRobotStore';

const StatusPills = () => {
  const { missionStatus, battery, signal, failsafe, system, isEmergencyStop, mode, setMode } = useRobotStore();

  return (
    <div className="flex justify-between items-start pointer-events-auto">
      
      {/* Top Left - Mission Status */}
      <div className="flex flex-col gap-3">
        <div className={`rounded-full px-4 py-2 shadow-md border flex items-center gap-4 transition-colors ${isEmergencyStop ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'}`}>
          <div className="text-sm">
            <span className={`font-medium mr-2 ${isEmergencyStop ? 'text-red-500' : 'text-slate-400'}`}>Status</span>
            <span className={`font-bold ${isEmergencyStop ? 'text-red-700' : 'text-slate-800'}`}>{missionStatus}</span>
          </div>
          <button className={`rounded-full p-1.5 transition-colors ${isEmergencyStop ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
            {isEmergencyStop ? <AlertTriangle size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
          </button>
        </div>
        <button className="bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 flex items-center justify-between font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors w-40 disabled:opacity-50" disabled={isEmergencyStop}>
          QUICK GOAL
          <div className="bg-slate-800 text-white rounded-full p-1">
            <ArrowRight size={14} />
          </div>
        </button>
      </div>

      {/* Top Center - System Telemetry */}
      <div className="flex flex-col items-center gap-3">
        <div className={`rounded-full px-6 py-3 shadow-xl flex items-center gap-6 text-sm transition-colors ${isEmergencyStop ? 'bg-red-900 border border-red-500/50' : 'bg-[#1e2330]'}`}>
          <div className="flex items-center gap-2 font-bold text-white">
            {battery}% <Battery size={16} className={battery > 20 ? "text-green-400" : "text-red-400"} fill="currentColor" />
          </div>
          <div className="flex items-center gap-2 text-yellow-500 font-bold">
            <Signal size={16} /> {signal}
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            Failsafe <span className="font-bold text-white flex items-center gap-1">{failsafe} <span className={`w-2 h-2 rounded-full inline-block ${failsafe === 'Okay' ? 'bg-green-500' : 'bg-red-500'}`}></span></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            System <span className="font-bold text-white flex items-center gap-1">{system} <span className={`w-2 h-2 rounded-full inline-block ${system === 'Okay' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></span></span>
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
          <button 
            onClick={() => setMode('AUTO')}
            className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm transition-colors ${mode === 'AUTO' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            AUTO
          </button>
          <button 
            onClick={() => setMode('MANUAL')}
            className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm transition-colors ${mode === 'MANUAL' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            MANUAL
          </button>
        </div>
        <button className="bg-white rounded-full px-4 py-2 shadow-md border border-slate-200 flex items-center gap-3 font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors disabled:opacity-50" disabled={isEmergencyStop}>
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
