import {scale} from './scale.js';
import {effect} from './effect.js';

const preview = {
  element: null,
  scale: scale,
  effect: effect,
  class: false,
};

const onScaleControlClick = (e) => {
  e.preventDefault();
  if (e.target.type === 'button') {
    preview.setScaleValue(preview.scale.set(e.target.classList.contains('scale__control--smaller') ? -preview.scale.step : preview.scale.step));
  }
};

const onEffectChange = (e) => {
  if (e.target.matches('input[type="radio"]')) {
    preview.effect.type = e.target.value;
    (preview.effect.type === 'none') ? preview.effect.hideLevel() : preview.effect.showLevel();
    preview.effect.resetNoUiSlider();
    preview.resetScale();
    preview.setEffectClass(preview.renderEffectClass());
  }
};

preview.renderEffectClass = function () {
  return `effects__preview--${this.effect.type}`;
};

preview.setEffectClass = function (className) {
  if (this.class) {
    this.element.classList.remove(this.class);
  }
  this.class = className;
  this.element.classList.add(className);
};

preview.createScale = function () {
  this.scale.add();
  this.scale.element.addEventListener('click', onScaleControlClick);
};

preview.setScaleValue = function (value) {
  this.element.style.transform = `scale(${value})`;
};

preview.resetScale = function () {
  this.scale.setDefault();
  this.element.style.transform = '';
};

preview.removeScale = function () {
  this.resetScale();
  this.scale.element.removeEventListener('click', onScaleControlClick);
};

preview.createEffect = function () {
  this.effect.add();
  this.effect.controls.addEventListener('change', onEffectChange);
};

preview.removeEffect = function () {
  this.effect.remove();
  this.effect.controls.removeEventListener('change', onEffectChange);
};

preview.create = function (element) {
  this.element = element;
  this.createScale();
  this.createEffect();

  this.effect.slider.noUiSlider.on('update', (___, handle, unencoded) => {
    this.effect.input.value = unencoded[handle];
    this.element.style.filter = this.effect.set(this.effect.type, this.effect.input.value);
  });
};

preview.remove = function () {
  this.removeScale();
  this.removeEffect();
};

export {preview};
