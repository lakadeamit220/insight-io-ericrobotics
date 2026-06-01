import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import CameraFeed from './components/camera/CameraFeed';
import PointCloudMap from './components/map/PointCloudMap';
import AnalyticsPanel from './components/analytics/AnalyticsPanel';

function App() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Left Column (Camera + Analytics) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Camera View */}
          <div className="h-1/2">
            <CameraFeed />
          </div>
          
          {/* Analytics Panel */}
          <div className="h-1/2">
            <AnalyticsPanel />
          </div>
        </div>

        {/* Right Column (3D Map View spanning larger area) */}
        <div className="lg:col-span-2 h-full">
          <PointCloudMap />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
