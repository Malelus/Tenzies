import { nanoid } from 'nanoid';

// Start screen title
const startTitle = ['P', 'R', 'E', 'S', 'S', 'S', 'T', 'A', 'R', 'T'];

// Generate values for new die
const generateNewDie = (letter) => ({
  id: nanoid(),
  value: letter ? letter : Math.ceil(Math.random() * 6),
  isHeld: false,
});

// Generate values array for dice
const allNewDice = (generateDice = true) => {
  const newDice = [];

  for (let i = 0; i < 10; i++) {
    newDice.push(generateDice ? generateNewDie() : generateNewDie(startTitle[i]));
  }

  return newDice;
};

export { allNewDice, generateNewDie };
