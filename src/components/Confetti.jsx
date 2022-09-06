import { useEffect, useState } from 'react';
import ConfettiElement from 'react-confetti';

const Confetti = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Watch window size for confetti element
  useEffect(() => {
    const watchWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', watchWindowSize);

    return () => window.removeEventListener('resize', watchWindowSize);
  }, []);

  return <ConfettiElement width={windowSize.width} height={windowSize.height} />;
};

export default Confetti;
