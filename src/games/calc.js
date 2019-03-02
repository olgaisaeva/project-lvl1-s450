import { gameContent, makeGame } from '..';
import getRandomIntBetweenMinAndMax from '../utilities';

const runBrainCalcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  const getGameContent = () => {
    const num1 = getRandomIntBetweenMinAndMax(0, 100);
    const num2 = getRandomIntBetweenMinAndMax(0, 100);
    const numOfOperation = getRandomIntBetweenMinAndMax(1, 3);

    switch (numOfOperation) {
      case 1:
        return gameContent(`${num1} + ${num2}`, String(num1 + num2));
      case 2:
        return gameContent(`${num1} - ${num2}`, String(num1 - num2));
      case 3:
        return gameContent(`${num1} * ${num2}`, String(num1 * num2));
      default:
        return null;
    }
  };

  makeGame(gameDescription, getGameContent);
};

export default runBrainCalcGame;
