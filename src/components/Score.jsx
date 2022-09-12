const Score = ({ throws, time, showStart, formatTime }) => {
  return (
    <div className={`game__stats game__stats-score ${!showStart ? 'game__stats-score--visible' : ''}`}>
      <p className='game__stats__text'>
        You have thrown the dice
        <strong> {throws} </strong>
        {throws > 1 ? 'times' : 'time'} and your time is
        <strong> {formatTime(time)}</strong>
      </p>
    </div>
  );
};

export default Score;
