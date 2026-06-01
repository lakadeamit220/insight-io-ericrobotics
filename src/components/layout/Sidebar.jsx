import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Camera, Map, BarChart3, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import useRobotStore from '../../store/useRobotStore';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { connectionStatus, activeView, setActiveView } = useRobotStore();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'camera', icon: Camera, label: 'Camera Feed' },
    { id: 'map', icon: Map, label: '3D Mapping' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div
      initial={{ width: 260 }}
      animate={{ width: isOpen ? 260 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen glass-panel border-r border-y-0 border-l-0 flex flex-col relative z-20"
    >
      <div className="p-6 flex items-center justify-between">
        <motion.div 
          animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? "flex" : "none" }}
          transition={{ duration: 0.2 }}
          className="font-bold text-xl tracking-tight text-slate-800 flex items-center gap-2 overflow-hidden whitespace-nowrap"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-black">IO</span>
          </div>
          Insight.IO
        </motion.div>
        
        {/* Only show logo icon when collapsed */}
        <motion.div 
          animate={{ opacity: !isOpen ? 1 : 0, display: !isOpen ? "flex" : "none" }}
          className="mx-auto w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0"
        >
          <span className="text-white text-sm font-black">IO</span>
        </motion.div>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              whileHover={{ scale: 1.02, backgroundColor: isActive ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center p-3 rounded-xl transition-colors group ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Icon size={22} className={`shrink-0 transition-colors ${isActive ? 'text-blue-600' : 'group-hover:text-blue-600'}`} />
              <motion.span 
                animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
                className="ml-4 font-medium whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-4 top-8 bg-slate-800 border border-slate-700 rounded-full p-1.5 hover:bg-slate-700 transition-colors text-white shadow-lg"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="p-4 border-t border-[var(--color-panel-border)] flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
          <motion.div 
            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
            className="overflow-hidden whitespace-nowrap text-left"
          >
            <p className="text-sm font-bold text-slate-800">Admin User</p>
            <p className="text-xs font-medium text-slate-500">ERIC Robotics</p>
          </motion.div>
        </div>
        
        {/* ROS Bridge Status */}
        <motion.div 
          animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0, display: isOpen ? "flex" : "none" }}
          className="items-center gap-2 px-2 overflow-hidden whitespace-nowrap"
        >
          <div className="relative flex items-center justify-center">
            <span className={`absolute inline-flex h-2 w-2 rounded-full opacity-75 ${connectionStatus === 'CONNECTED' ? 'bg-green-400 animate-ping' : 'bg-red-500'}`}></span>
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${connectionStatus === 'CONNECTED' ? 'bg-green-500' : 'bg-red-600'}`}></span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {connectionStatus === 'CONNECTED' ? 'ROS Bridge Active' : 'ROS Bridge Offline'}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
