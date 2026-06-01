import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import CameraFeed from './components/camera/CameraFeed';
import PointCloudMap from './components/map/PointCloudMap';
import StatusPills from './components/ui/StatusPills';
import Controls from './components/ui/Controls';
import AnalyticsPanel from './components/analytics/AnalyticsPanel';
import { useRosTelemetry } from './hooks/useRosTelemetry';
import { useHotkeys } from './hooks/useHotkeys';
import useRobotStore from './store/useRobotStore';

function App() {
  useRosTelemetry(); // Initialize mock ROS bridge
  useHotkeys(); // Initialize global hotkeys
  const activeView = useRobotStore(state => state.activeView);

  const renderDashboardView = () => (
    <>
      <PointCloudMap />
      <div className="absolute inset-0 z-10 pointer-events-none p-8 flex flex-col justify-between">
        <StatusPills />
        <div className="flex justify-between items-end pb-4">
          <div className="pointer-events-auto">
            <CameraFeed />
          </div>
          <div className="pointer-events-auto">
            <Controls />
          </div>
        </div>
      </div>
    </>
  );

  const renderCameraView = () => (
    <div className="h-full w-full bg-slate-900 flex items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-8 left-8 pointer-events-auto z-10">
        <StatusPills />
      </div>
      <div className="scale-150 origin-center pointer-events-auto">
        <CameraFeed />
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-auto z-10">
        <Controls />
      </div>
    </div>
  );

  const renderAnalyticsView = () => (
    <div className="p-8 h-full bg-slate-100 flex flex-col">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">System Analytics</h1>
      <div className="flex-1 max-w-4xl">
        <AnalyticsPanel />
      </div>
    </div>
  );

  const renderView = () => {
    switch(activeView) {
      case 'dashboard': return renderDashboardView();
      case 'camera': return renderCameraView();
      case 'analytics': return renderAnalyticsView();
      default: return (
        <div className="flex h-full items-center justify-center text-slate-400 flex-col gap-4 bg-slate-50">
          <h2 className="text-xl font-bold">Module Under Construction</h2>
          <p>The {activeView} module is coming in a future update.</p>
        </div>
      );
    }
  };

  return (
    <DashboardLayout>
      {renderView()}
    </DashboardLayout>
  );
}

export default App;
