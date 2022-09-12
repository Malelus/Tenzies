const Highscore = ({ highscore, clearHighscore, formatTime }) => {
  return (
    <div
      className={`game__stats game__stats-highscore ${
        highscore.throwsQuantity ? 'game__stats-highscore--visible' : ''
      }`}
    >
      <p className='game__stats__text'>
        Highscore on this device is
        <strong> {highscore.throwsQuantity} </strong>
        {highscore.throwsQuantity > 1 ? 'throws' : 'throw'} in
        <strong> {formatTime(highscore.victoryTime)}</strong>
      </p>

      <button className='game__stats__clear-btn btn' onClick={clearHighscore}>
        Clear Highscore
      </button>
    </div>
  );
};

export default Highscore;
