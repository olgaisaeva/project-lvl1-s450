import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const getRandomIntBetweenMinAndMax = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const roundsCount = 3;

const makeGame = () => {
  const welcomeMessage = 'Welcome to the Brain Games!';
  console.log(welcomeMessage);

  const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';
  console.log(gameRules);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameQuestion = getRandomIntBetweenMinAndMax(0, 1000);
    console.log(`Question: ${gameQuestion}`);
    const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
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

export default makeGame;
