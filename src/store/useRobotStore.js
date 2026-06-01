import { create } from 'zustand';

const useRobotStore = create((set) => ({
  battery: 100,
  signal: 'Strong',
  failsafe: 'Okay',
  system: 'Okay',
  missionStatus: 'On Mission 1234',
  isEmergencyStop: false,
  mode: 'AUTO',
  connectionStatus: 'CONNECTED', // CONNECTED, CONNECTING, DISCONNECTED
  waypoint: null, // [x, y, z] coordinates
  
  setWaypoint: (point) => set({ waypoint: point }),
  
  toggleEmergencyStop: () => set((state) => {
    const isEStop = !state.isEmergencyStop;
    return { 
      isEmergencyStop: isEStop,
      missionStatus: isEStop ? 'HALTED (E-STOP)' : 'On Mission 1234',
      system: isEStop ? 'ERROR' : 'Okay'
    };
  }),
  
  setMode: (mode) => set({ mode }),
  
  simulateConnectionDrop: () => {
    set({ connectionStatus: 'DISCONNECTED', signal: 'Lost' });
    
    // Automatically try to reconnect after 3 seconds
    setTimeout(() => {
      set({ connectionStatus: 'CONNECTING', signal: 'Weak' });
      
      // Successfully reconnect after another 2 seconds
      setTimeout(() => {
        set({ connectionStatus: 'CONNECTED', signal: 'Strong' });
      }, 2000);
    }, 3000);
  },
  
  updateTelemetry: (data) => set((state) => ({ ...state, ...data }))
}));

export default useRobotStore;
