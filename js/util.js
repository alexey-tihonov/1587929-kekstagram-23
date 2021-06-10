const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, length) => (string.length === length);

export {getRandomInt, checkStringLength};
