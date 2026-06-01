import { useEffect } from 'react';
import useRobotStore from '../store/useRobotStore';

export const useHotkeys = () => {
  const toggleEmergencyStop = useRobotStore(state => state.toggleEmergencyStop);
  const setMode = useRobotStore(state => state.setMode);
  const setKey = useRobotStore(state => state.setKey);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      const key = e.key.toLowerCase();
      
      if (e.code === 'Space') {
        e.preventDefault();
        toggleEmergencyStop();
      }
      
      if (key === 'm') {
        setMode(useRobotStore.getState().mode === 'AUTO' ? 'MANUAL' : 'AUTO');
      }

      if (['w', 'a', 's', 'd'].includes(key)) {
        setKey(key, true);
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd'].includes(key)) {
        setKey(key, false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [toggleEmergencyStop, setMode, setKey]);
};
