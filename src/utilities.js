const isEven = num => num % 2 === 0;
const getRandomIntBetweenMinAndMax = (min, max) => (
  Math.floor(Math.random() * (max + 1 - min)) + min
);

export { isEven, getRandomIntBetweenMinAndMax };
