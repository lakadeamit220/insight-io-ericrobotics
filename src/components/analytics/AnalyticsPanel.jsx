import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Battery, Compass, Gauge, AlertTriangle, Zap } from 'lucide-react';

const MetricCard = ({ title, value, unit, icon: Icon, colorClass, valueColor, progress }) => (
  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col gap-3">
    <div className="flex justify-between items-center text-slate-400 text-sm">
      <span className="font-medium">{title}</span>
      <Icon size={16} className={colorClass} />
    </div>
    <div className="flex items-baseline gap-1">
      <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
      <span className="text-slate-500 text-xs font-medium">{unit}</span>
    </div>
    {progress !== undefined && (
      <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
        <motion.div 
          className={`h-full ${colorClass.replace('text-', 'bg-')}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    )}
  </div>
);

const AnalyticsPanel = () => {
  const [telemetry, setTelemetry] = useState({
    speed: 12.4,
    battery: 87,
    cpu: 45,
    heading: 245
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        speed: Math.max(0, prev.speed + (Math.random() - 0.5) * 2).toFixed(1),
        battery: Math.max(0, prev.battery - (Math.random() > 0.9 ? 1 : 0)),
        cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() - 0.5) * 10)).toFixed(0),
        heading: (prev.heading + (Math.random() - 0.5) * 5) % 360
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-2xl h-full flex flex-col p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <Activity size={18} className="text-blue-400" />
          Live Telemetry
        </h2>
        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
          Last updated: 1s ago
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        <MetricCard 
          title="Velocity" 
          value={telemetry.speed} 
          unit="m/s" 
          icon={Gauge} 
          colorClass="text-blue-400" 
          valueColor="text-white"
          progress={(telemetry.speed / 30) * 100}
        />
        <MetricCard 
          title="Battery" 
          value={telemetry.battery} 
          unit="%" 
          icon={Battery} 
          colorClass={telemetry.battery > 20 ? "text-green-400" : "text-red-400"} 
          valueColor={telemetry.battery > 20 ? "text-white" : "text-red-400"}
          progress={telemetry.battery}
        />
        <MetricCard 
          title="Compute" 
          value={telemetry.cpu} 
          unit="%" 
          icon={Zap} 
          colorClass={telemetry.cpu < 80 ? "text-purple-400" : "text-orange-400"} 
          valueColor="text-white"
          progress={telemetry.cpu}
        />
        <MetricCard 
          title="Heading" 
          value={Math.round(telemetry.heading)} 
          unit="deg" 
          icon={Compass} 
          colorClass="text-slate-400" 
          valueColor="text-white"
        />
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <h3 className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
          <AlertTriangle size={14} className="text-orange-400" />
          Recent Alerts
        </h3>
        <div className="space-y-2">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded p-2.5 flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
            <div>
              <p className="text-xs text-orange-200 font-medium">Obstacle Detected</p>
              <p className="text-[10px] text-orange-400/70 mt-0.5">Proximity sensor FR_02 triggered at 1.2m</p>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded p-2.5 flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <div>
              <p className="text-xs text-slate-300 font-medium">Path Recalculated</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Navigation module found optimal route</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
