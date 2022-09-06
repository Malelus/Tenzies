import { useEffect, useState } from 'react';

import { useTransition as useSpringTransition, animated } from 'react-spring';

const Score = ({ throws, time, showStart, formatTime }) => {
  const [isVisible, setIsVisible] = useState(!showStart);

  useEffect(() => {
    setIsVisible(!showStart);
  }, [showStart]);

  const transition = useSpringTransition(isVisible, {
    from: { height: 0, opacity: 0 },
    enter: { height: 32, opacity: 1 },
    leave: () => async (next) => {
      await next({ height: 32, opacity: 0 });
      await next({ height: 0, opacity: 0 });
    },
  });

  return transition(
    (style, item) =>
      item && (
        <animated.div style={style} className='game__stats'>
          <p className='game__stats__text'>
            You have thrown the dice
            <strong> {throws} </strong>
            {throws > 1 ? 'times' : 'time'} and your time is
            <strong> {formatTime(time)}</strong>
          </p>
        </animated.div>
      )
  );
};

export default Score;
