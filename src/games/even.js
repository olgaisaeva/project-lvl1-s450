import { gameContent, makeGame } from '..';
import getRandomIntBetweenMinAndMax from '../utilities';

const isEven = num => num % 2 === 0;

const runBrainEvenGame = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  const getGameContent = () => {
    const question = getRandomIntBetweenMinAndMax(0, 1000);
    const answer = isEven(question) ? 'yes' : 'no';
    return gameContent(question, answer);
  };

  makeGame(gameDescription, getGameContent);
};

export default runBrainEvenGame;
