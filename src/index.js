import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const gameContent = (question, answer) => cons(question, answer);
const getQuestion = content => car(content);
const getAnswer = content => cdr(content);

const roundsCount = 3;

const makeGame = (gameDescription, getGameContent) => {
  const welcomeMessage = 'Welcome to the Brain Games!';
  console.log(welcomeMessage);
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const contentOfGameRound = getGameContent();
    const gameQuestion = getQuestion(contentOfGameRound);
    const correctAnswer = String(getAnswer(contentOfGameRound));
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(counter - 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(roundsCount);
};

export { gameContent, makeGame };
