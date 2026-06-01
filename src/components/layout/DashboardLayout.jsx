import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-[var(--color-background)] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
        <Header />
        <main className="flex-1 p-6 overflow-hidden flex flex-col gap-6 z-10 relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
