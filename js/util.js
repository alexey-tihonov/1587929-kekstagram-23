const ESC_KEYCODE = 27;
const keyboard = {
  isEsc: (e, callBack) => e.keyCode === ESC_KEYCODE && callBack(),
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, length) => (string.length === length);

export {getRandomInt, checkStringLength, keyboard};
