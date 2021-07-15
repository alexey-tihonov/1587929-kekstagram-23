import {openUploadFileModal} from './upload-modal.js';
import {validateForm} from './validation.js';
import {preview} from './preview.js';

const form = {
  element: document.querySelector('.img-upload__form'),
  overlay: document.querySelector('.img-upload__form .img-upload__overlay'),
  hashtagInput: document.querySelector('.img-upload__form .text__hashtags'),
  commentInput: document.querySelector('.img-upload__form .text__description'),
  submitButton: document.querySelector('.img-upload__form #upload-submit'),
  preview: preview,
};

form.open = function (file) {
  const onCloseForm = () => {
    file.element.value = '';
    this.preview.remove();
  };

  this.preview.create(form.element.querySelector('.img-upload__preview'));
  openUploadFileModal(this.element, this.overlay, onCloseForm);
};

validateForm(form);

export {form};
