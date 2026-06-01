import { useEffect } from 'react';
import useRobotStore from '../store/useRobotStore';

export const useHotkeys = () => {
  const { toggleEmergencyStop, mode, setMode, setKey } = useRobotStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent scrolling when pressing spacebar
      if (e.code === 'Space') {
        e.preventDefault();
        toggleEmergencyStop();
      }
      
      if (e.code === 'KeyM') {
        setMode(useRobotStore.getState().mode === 'AUTO' ? 'MANUAL' : 'AUTO');
      }

      if (e.code === 'KeyW') setKey('w', true);
      if (e.code === 'KeyA') setKey('a', true);
      if (e.code === 'KeyS') setKey('s', true);
      if (e.code === 'KeyD') setKey('d', true);
    };

    const handleKeyUp = (e) => {
      if (e.code === 'KeyW') setKey('w', false);
      if (e.code === 'KeyA') setKey('a', false);
      if (e.code === 'KeyS') setKey('s', false);
      if (e.code === 'KeyD') setKey('d', false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [toggleEmergencyStop, setKey]);
};
