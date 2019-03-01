import { gameContent, makeGame } from '..';
import getRandomIntBetweenMinAndMax from '../utilities';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const iter = (counter) => {
    if (counter > num / 2) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }

    return iter(counter + 1);
  };

  return iter(2);
};

const runBrainPrimeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getGameContent = () => {
    const question = getRandomIntBetweenMinAndMax(0, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return gameContent(question, answer);
  };

  makeGame(gameDescription, getGameContent);
};

export default runBrainPrimeGame;
