import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Battery, Compass, Gauge, AlertTriangle, Zap } from 'lucide-react';

const MetricCard = ({ title, value, unit, icon: Icon, colorClass, valueColor, progress }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-center text-slate-500 text-sm">
      <span className="font-medium">{title}</span>
      <Icon size={16} className={colorClass} />
    </div>
    <div className="flex items-baseline gap-1">
      <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
      <span className="text-slate-500 text-xs font-medium">{unit}</span>
    </div>
    {progress !== undefined && (
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        speed: Math.max(0, prev.speed + (Math.random() - 0.5) * 2),
        battery: Math.max(0, prev.battery - (Math.random() > 0.9 ? 1 : 0)),
        cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() - 0.5) * 10)),
        heading: (prev.heading + (Math.random() - 0.5) * 5) % 360
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-slate-200 shadow-xl rounded-2xl h-full flex flex-col p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-800 text-lg font-bold flex items-center gap-2">
          <Activity size={20} className="text-blue-500" />
          Live Telemetry
        </h2>
        <span className="px-3 py-1 rounded bg-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-500 border border-slate-200">
          Last updated: 1s ago
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <MetricCard 
          title="Velocity" 
          value={telemetry.speed.toFixed(1)} 
          unit="m/s" 
          icon={Gauge} 
          colorClass="text-blue-500" 
          valueColor="text-slate-800"
          progress={(telemetry.speed / 30) * 100}
        />
        <MetricCard 
          title="Battery" 
          value={Math.round(telemetry.battery)} 
          unit="%" 
          icon={Battery} 
          colorClass={telemetry.battery > 20 ? "text-green-500" : "text-red-500"} 
          valueColor={telemetry.battery > 20 ? "text-slate-800" : "text-red-600"}
          progress={telemetry.battery}
        />
        <MetricCard 
          title="Compute" 
          value={Math.round(telemetry.cpu)} 
          unit="%" 
          icon={Zap} 
          colorClass={telemetry.cpu < 80 ? "text-purple-500" : "text-orange-500"} 
          valueColor="text-slate-800"
          progress={telemetry.cpu}
        />
        <MetricCard 
          title="Heading" 
          value={Math.round(telemetry.heading)} 
          unit="deg" 
          icon={Compass} 
          colorClass="text-slate-500" 
          valueColor="text-slate-800"
        />
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <AlertTriangle size={16} className="text-orange-500" />
          Recent Alerts
        </h3>
        <div className="space-y-3">
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-orange-900 font-bold">Obstacle Detected</p>
              <p className="text-xs text-orange-700 mt-0.5">Proximity sensor FR_02 triggered at 1.2m</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-blue-900 font-bold">Path Recalculated</p>
              <p className="text-xs text-blue-700 mt-0.5">Navigation module found optimal route</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
