import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-[var(--color-background)] overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full relative">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
