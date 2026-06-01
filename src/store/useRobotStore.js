import { create } from 'zustand';

const useRobotStore = create((set) => ({
  battery: 100,
  signal: 'Strong',
  failsafe: 'Okay',
  system: 'Okay',
  missionStatus: 'On Mission 1234',
  isEmergencyStop: false,
  mode: 'AUTO',
  
  toggleEmergencyStop: () => set((state) => {
    const isEStop = !state.isEmergencyStop;
    return { 
      isEmergencyStop: isEStop,
      missionStatus: isEStop ? 'HALTED (E-STOP)' : 'On Mission 1234',
      system: isEStop ? 'ERROR' : 'Okay'
    };
  }),
  
  setMode: (mode) => set({ mode }),
  
  updateTelemetry: (data) => set((state) => ({ ...state, ...data }))
}));

export default useRobotStore;
