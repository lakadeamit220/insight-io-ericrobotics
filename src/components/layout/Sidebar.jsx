import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Camera, Map, BarChart3, Settings, ChevronRight, ChevronLeft } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? "block" : "none" }}
          transition={{ duration: 0.2 }}
          className="font-bold text-xl tracking-tight text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-black">IO</span>
          </div>
          Insight.IO
        </motion.div>
        
        {/* Only show logo icon when collapsed */}
        <motion.div 
          animate={{ opacity: !isOpen ? 1 : 0, display: !isOpen ? "block" : "none" }}
          className="mx-auto w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center"
        >
          <span className="text-white text-sm font-black">IO</span>
        </motion.div>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center p-3 rounded-xl transition-colors text-slate-300 hover:text-white group`}
            >
              <Icon size={22} className="group-hover:text-blue-400 transition-colors shrink-0" />
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
        className="absolute -right-4 top-8 bg-slate-800 border border-slate-700 rounded-full p-1.5 hover:bg-slate-700 transition-colors text-slate-300 shadow-lg"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="p-4 border-t border-[var(--color-panel-border)]">
        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0"></div>
          <motion.div 
            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
            className="overflow-hidden whitespace-nowrap"
          >
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-slate-400">ERIC Robotics</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
