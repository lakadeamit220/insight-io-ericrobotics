import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between px-8 glass-panel border-b border-x-0 border-t-0 z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-white tracking-tight">System Overview</h1>
        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          System Online
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search robots, locations..." 
            className="bg-slate-800/50 border border-slate-700 focus:border-blue-500 text-white text-sm rounded-full pl-10 pr-4 py-2 outline-none w-64 transition-all"
          />
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-slate-800 text-slate-300 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[var(--color-background)]"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
