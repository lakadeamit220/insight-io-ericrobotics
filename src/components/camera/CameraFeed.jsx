import React, { useRef, useEffect } from 'react';
import { Camera, Maximize2, Radio } from 'lucide-react';

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set playback rate to make the short sample clip look more like a live continuous feed
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="glass-panel rounded-2xl flex-1 flex flex-col relative overflow-hidden group">
      {/* Header bar */}
      <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-md backdrop-blur-md">
            <Camera size={16} />
          </div>
          <span className="font-semibold text-white text-sm">Front Camera - CAM_01</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded flex items-center gap-1.5 text-xs font-mono backdrop-blur-md">
            <Radio size={12} className="animate-pulse" />
            LIVE
          </div>
          <button className="text-white/70 hover:text-white transition-colors bg-black/40 p-1.5 rounded-md backdrop-blur-md">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Video Feed */}
      <div className="w-full h-full relative bg-black flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          src="/videos/camera-feed.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-90 mix-blend-lighten"
        />
        
        {/* Mock Overlays for visual effect (bounding boxes, crosshairs) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-400/50"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-400/50"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-400/50"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-400/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-400/50 rounded-full"></div>
        </div>
        
        {/* Technical Data Overlay */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-1 text-green-400/70 font-mono text-xs z-10 pointer-events-none">
          <span>FPS: 30.01</span>
          <span>LAT: 12ms</span>
          <span>RES: 1080p</span>
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;
