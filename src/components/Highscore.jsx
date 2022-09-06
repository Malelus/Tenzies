import { useEffect, useState } from 'react';

import { useTransition as useSpringTransition, animated } from 'react-spring';

const Highscore = ({ highscore, clearHighscore, formatTime }) => {
  const [isVisible, setIsVisible] = useState(!!highscore.throwsQuantity);

  useEffect(() => {
    setIsVisible(!!highscore.throwsQuantity);
  }, [highscore]);

  const transition = useSpringTransition(isVisible, {
    from: isVisible ? { height: 64, opacity: 1 } : { height: 0, opacity: 0 },
    enter: { height: 64, opacity: 1 },
    leave: () => async (next) => {
      await next({ height: 64, opacity: 0 });
      await next({ height: 0, opacity: 0 });
    },
  });

  return transition(
    (style, item) =>
      item && (
        <animated.div style={style} className='game__stats'>
          <p className='game__stats__text'>
            Highscore on this device is
            <strong> {highscore.throwsQuantity} </strong>
            {highscore.throwsQuantity > 1 ? 'throws' : 'throw'} in
            <strong> {formatTime(highscore.victoryTime)}</strong>
          </p>

          <button className='game__stats__clear-btn' onClick={clearHighscore}>
            Clear Highscore
          </button>
        </animated.div>
      )
  );
};

export default Highscore;
