const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;
const keyboard = {
  isEsc: (e, callBack) => e.keyCode === ESC_KEYCODE && callBack(),
  isEnter: (e, callBack) => e.keyCode === ENTER_KEYCODE && callBack(),
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {getRandomInt, keyboard};
