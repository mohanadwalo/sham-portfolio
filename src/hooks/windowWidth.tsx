import { useState, useEffect } from 'react';
import { IS_SMALL_SCREEN, designThreshold } from '../constants/designThreshold';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (windowWidth <= designThreshold)
    localStorage.setItem(IS_SMALL_SCREEN, '1');
  else localStorage.setItem(IS_SMALL_SCREEN, '');
  return windowWidth;
};
