import { gameContent, makeGame } from '..';
import getRandomIntBetweenMinAndMax from '../utilities';

const generateArithmeticProgression = (length, commonDiff, initialTerm) => {
  const iter = (counter, acc) => {
    if (counter > length) {
      return acc;
    }

    const currentTerm = initialTerm + (counter - 1) * commonDiff;
    return iter(counter + 1, `${acc} ${currentTerm}`);
  };

  return iter(2, initialTerm);
};

const runBrainProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';

  const progressionLength = 10;
  const getGameContent = () => {
    const commonDifference = getRandomIntBetweenMinAndMax(1, 10);
    const firstTerm = getRandomIntBetweenMinAndMax(1, 10);
    const progression = generateArithmeticProgression(
      progressionLength, commonDifference, firstTerm,
    );
    const positionOfHiddenElement = getRandomIntBetweenMinAndMax(1, progressionLength);

    const answer = String(firstTerm + (positionOfHiddenElement - 1) * commonDifference);
    const question = progression.replace(`${answer}`, '..');

    return gameContent(question, answer);
  };

  makeGame(gameDescription, getGameContent);
};

export default runBrainProgressionGame;
