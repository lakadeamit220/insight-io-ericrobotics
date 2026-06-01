import React from 'react';
import { WifiOff, Loader2 } from 'lucide-react';

export const CameraFallback = () => {
  return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-400 p-4 rounded-xl overflow-hidden relative">
      {/* Static noise simulation overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      
      <WifiOff size={32} className="mb-3 text-red-400 animate-pulse" />
      <h3 className="font-bold text-white text-sm mb-1">Signal Lost</h3>
      <p className="text-xs text-center text-slate-500 mb-4">No video feed detected from /camera/rgb/image_raw</p>
      
      <div className="flex items-center gap-2 text-xs font-medium bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
        <Loader2 size={12} className="animate-spin text-blue-400" />
        Attempting to reconnect...
      </div>
    </div>
  );
};
