import React, { useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import useRobotStore from '../../store/useRobotStore';
import { CameraFallback } from '../ui/FallbackScreens';

const CameraFeed = () => {
  const videoRef = useRef(null);
  const { connectionStatus, simulateConnectionDrop } = useRobotStore();

  useEffect(() => {
    if (videoRef.current && connectionStatus === 'CONNECTED') {
      videoRef.current.playbackRate = 0.8;
    }
  }, [connectionStatus]);

  return (
    <div className="flex items-center gap-4">
      {/* Zoom slider control (Mock) */}
      <div className="flex flex-col items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
        <button aria-label="Zoom In" className="text-slate-800 hover:bg-slate-200 rounded-full p-1 transition-colors">
          <Plus size={16} />
        </button>
        <div className="w-1 h-20 bg-slate-200 rounded-full relative">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rounded-full shadow-sm"></div>
        </div>
        <button aria-label="Zoom Out" className="text-slate-800 hover:bg-slate-200 rounded-full p-1 transition-colors">
          <Minus size={16} />
        </button>
      </div>

      {/* Video Feed or Fallback */}
      <div 
        className="w-80 h-52 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/50 relative cursor-pointer"
        onDoubleClick={simulateConnectionDrop}
        title="Double click to simulate connection drop"
      >
        {connectionStatus === 'CONNECTED' ? (
          <video 
            ref={videoRef}
            src="/videos/camera-feed.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <CameraFallback />
        )}
      </div>
    </div>
  );
};

export default CameraFeed;
