import { gameContent, makeGame } from '..';
import { isEven, getRandomIntBetweenMinAndMax } from '../utilities';

const runBrainEvenGame = () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';
  const getGameContent = () => {
    const question = getRandomIntBetweenMinAndMax(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return gameContent(question, answer);
  };

  makeGame(gameRules, getGameContent);
};

export default runBrainEvenGame;
