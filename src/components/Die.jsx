const Die = (props) => {
  // Check if value is not a start screen title
  const isNumber = Number.isInteger(props.value);

  const styles = {
    backgroundColor: isNumber ? (props.isHeld ? '#59E391' : '#fff') : '#2b283a',
  };

  const content = isNumber ? (
    Array(props.value)
      .fill(0)
      .map((_, i) => <i key={i} className='gameboard__die-dot' />)
  ) : (
    <p className='gameboard__die-letter'>{props.value}</p>
  );

  return (
    <div className='gameboard__die' style={styles} onClick={props.isPlaying ? props.holdDice : undefined}>
      {content}
    </div>
  );
};

export default Die;
