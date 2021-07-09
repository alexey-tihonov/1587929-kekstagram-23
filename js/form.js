import {openUploadFileModal} from './upload-modal.js';
import {validateForm} from './validation.js';

const EFFECTS = [
  {
    name: 'chrome',
    value: 1,
    step: 0.1,
    minimum: 0,
    maximum: 1,
    units: '',
  },
  {
    name: 'sepia',
    value: 1,
    step: 0.1,
    minimum: 0,
    maximum: 1,
    units: '',
  },
  {
    name: 'marvin',
    value: 100,
    step: 1,
    minimum: 0,
    maximum: 100,
    units: '%',
  },
  {
    name: 'phobos',
    value: 1,
    step: 0.1,
    minimum: 0,
    maximum: 3,
    units: 'px',
  },
  {
    name: 'heat',
    value: 1,
    step: 0.1,
    minimum: 1,
    maximum: 3,
    units: '',
  },
];

const form = {
  element: document.querySelector('.img-upload__form'),
  overlay: document.querySelector('.img-upload__form .img-upload__overlay'),
  img: document.querySelector('.img-upload__form .img-upload__preview'),
  scale: {
    element: document.querySelector('.img-upload__form .img-upload__scale'),
    step: 25,
    default: 100,
  },
  effect: {
    types: EFFECTS,
    active: '',
    level: '',
  },
  hashtagInput:  document.querySelector('.img-upload__form .text__hashtags'),
  commentInput: document.querySelector('.img-upload__form .text__description'),
  submitButton: document.querySelector('.img-upload__form #upload-submit'),
};

form.changeScale = (step) => {
  if (parseFloat(form.scale.input.value) + step > 0 && parseFloat(form.scale.input.value) + step <= 100) {
    form.scale.input.value = `${ parseFloat(form.scale.input.value) + step }%`;
    form.img.style.transform = `scale(${ parseFloat(form.scale.input.value) / 100 })`;
  }
};

form.setDefaultScaleValue = function() {
  this.scale.input.value = `${this.scale.default}%`;
  this.img.style.transform = 'none';
};

form.setEffect = function(effect, value) {
  switch(effect) {
    case 'chrome':
      return `grayscale${ value }`;
    case 'sepia':
      return `sepia${ value }`;
    case 'marvin':
      return `invert${ value }`;
    case 'phobos':
      return `blur${ value }`;
    case 'heat':
      return `brightness${ value }`;
    case 'none':
    default:
      return false;
  }
};

form.open = function(file) {
  const onScaleControlClick = (e) => {
    e.preventDefault();
    form.changeScale(e.target.classList.contains('scale__control--smaller') ? -this.scale.step : this.scale.step);
  };

  const onCloseForm = () => {
    file.element.value = '';
    form.setDefaultScaleValue();
    form.scale.element.removeEventListener('click', onScaleControlClick);
  };

  openUploadFileModal(this.element, this.overlay, onCloseForm);

  this.scale.input = this.scale.element.querySelector('input.scale__control--value');
  this.setDefaultScaleValue();
  this.scale.element.addEventListener('click', onScaleControlClick);
};

validateForm(form);

export {form};
