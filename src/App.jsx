import { useEffect, useState } from 'react';

import { allNewDice, generateNewDie } from './functions/generateDice';

import Die from './components/Die';
import Highscore from './components/Highscore';
import Score from './components/Score';
import Confetti from './components/Confetti';
import Footer from './components/Footer';

const formatTime = (time) => (
  <>
    <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
  </>
);

const App = () => {
  const [showStart, setShowStart] = useState(true);
  const [victory, setVictory] = useState(false);

  const [dice, setDice] = useState(allNewDice(false));

  // Load highscore from local storage
  const [highscore, setHighscore] = useState(
    () => JSON.parse(localStorage.getItem('highscore')) || { throwsQuantity: null, victoryTime: null }
  );

  // Clear gained highscore
  const clearHighscore = () => {
    setHighscore(() => ({ throwsQuantity: null, victoryTime: null }));
  };

  // Save highscore to local storage
  useEffect(() => {
    localStorage.setItem('highscore', JSON.stringify(highscore));
  }, [highscore]);

  const [throwsQuantity, setThrowsQuantity] = useState(0);
  const [victoryTime, setVictoryTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Game stopwatch
  useEffect(() => {
    let gameDuration;

    if (isPlaying) {
      gameDuration = setInterval(() => {
        setVictoryTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isPlaying) {
      clearInterval(gameDuration);
    }

    return () => clearInterval(gameDuration);
  }, [isPlaying]);

  // Update highscore
  const updateHighscore = () => {
    if (
      (highscore.throwsQuantity === null || throwsQuantity < highscore.throwsQuantity) &&
      (highscore.victoryTime === null || victoryTime < highscore.victoryTime)
    ) {
      setHighscore(() => ({ throwsQuantity: throwsQuantity, victoryTime: victoryTime }));
    }
  };

  // Check for victory
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);

    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      updateHighscore();
      setVictory(true);
      setIsPlaying(false);
    }
  }, [dice]);

  // Start a new game
  const startGame = () => {
    setShowStart(false);
    setDice(allNewDice());
    setThrowsQuantity(0);
    setIsPlaying(true);
  };

  // Reset all states
  const resetGame = () => {
    setVictory(false);
    setIsPlaying(false);
    setShowStart(true);
    setDice(allNewDice(false));
    setVictoryTime(0);
  };

  // Generate new dice
  const rollDice = () => {
    setDice((oldDice) => oldDice.map((die) => (die.isHeld ? die : generateNewDie())));
    setThrowsQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Held value in die
  const holdDice = (id) => {
    setDice((oldDice) => oldDice.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
  };

  // Generate die element
  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} isPlaying={isPlaying} />
  ));

  return (
    <div className='container'>
      <main className='game'>
        <h1 className='game__title'>Tenzies</h1>
        <p className='game__description'>
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>

        <section className='gameboard'>{diceElements}</section>

        <section className={`game__btns ${isPlaying ? 'game__btns--expanded' : ''}`}>
          <button className='game__btn btn' onClick={showStart ? startGame : victory ? resetGame : rollDice}>
            {showStart ? 'Start' : victory ? 'New Game' : 'Roll'}
          </button>

          <button
            className={`game__btn game__btn-reset  ${isPlaying ? 'game__btn-reset--visible' : ''} btn`}
            onClick={resetGame}
          >
            Reset
          </button>
        </section>

        <section className='game__stats-container'>
          <Score throws={throwsQuantity} time={victoryTime} showStart={showStart} formatTime={formatTime} />
          <Highscore highscore={highscore} clearHighscore={clearHighscore} formatTime={formatTime} />
        </section>
      </main>

      <Footer />

      {victory && <Confetti />}
    </div>
  );
};

export default App;
