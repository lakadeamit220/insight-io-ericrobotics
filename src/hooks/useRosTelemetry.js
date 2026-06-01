import { useEffect } from 'react';
import useRobotStore from '../store/useRobotStore';

/**
 * Professional Enhancement: Mock ROS (Robot Operating System) Integration
 * This hook simulates subscribing to standard ROS topics via roslibjs/rosbridge.
 */
export const useRosTelemetry = () => {
  const { updateTelemetry, connectionStatus, isEmergencyStop } = useRobotStore();

  useEffect(() => {
    if (connectionStatus !== 'CONNECTED') return;

    // Simulate connecting to a ROS websocket bridge
    console.log('[ROS Bridge] Establishing websocket connection to ws://localhost:9090...');
    console.log('[ROS Bridge] Connected.');
    console.log('[ROS Bridge] Subscribing to /sensor_msgs/BatteryState...');
    console.log('[ROS Bridge] Subscribing to /diagnostic_msgs/DiagnosticArray...');

    // Simulate incoming ROS topic messages
    const telemetryInterval = setInterval(() => {
      if (useRobotStore.getState().isEmergencyStop) return;

      // Simulate a fluctuating signal (like a moving robot)
      const signals = ['Strong', 'Strong', 'Good', 'Strong'];
      const randomSignal = signals[Math.floor(Math.random() * signals.length)];
      
      updateTelemetry({
        signal: randomSignal,
      });
      
    }, 2500); // Receive new "ROS message" every 2.5s

    return () => {
      clearInterval(telemetryInterval);
      console.log('[ROS Bridge] Connection closed.');
    };
  }, [connectionStatus, isEmergencyStop, updateTelemetry]);
};
