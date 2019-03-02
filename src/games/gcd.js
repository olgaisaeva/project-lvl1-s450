import { gameContent, makeGame } from '..';
import getRandomIntBetweenMinAndMax from '../utilities';

const gcd = (m, n) => (m % n === 0 ? n : gcd(n, m % n));

const runBrainGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const getGameContent = () => {
    const num1 = getRandomIntBetweenMinAndMax(0, 100);
    const num2 = getRandomIntBetweenMinAndMax(0, 100);
    const question = `${num1} ${num2}`;
    const answer = String(gcd(num1, num2));
    return gameContent(question, answer);
  };

  makeGame(gameDescription, getGameContent);
};

export default runBrainGcdGame;
