import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import CameraFeed from './components/camera/CameraFeed';
import PointCloudMap from './components/map/PointCloudMap';
import StatusPills from './components/ui/StatusPills';
import Controls from './components/ui/Controls';

function App() {
  return (
    <DashboardLayout>
      {/* Background 3D Map Layer */}
      <PointCloudMap />
      
      {/* Floating UI Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none p-8 flex flex-col justify-between">
        
        {/* Top Floating Bar */}
        <StatusPills />
        
        {/* Bottom Floating Bar */}
        <div className="flex justify-between items-end pb-4">
          <div className="pointer-events-auto">
            <CameraFeed />
          </div>
          <div className="pointer-events-auto">
            <Controls />
          </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
}

export default App;
