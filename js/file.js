import {form} from './form.js';

const addFileUploadHandler = () => {
  const file = {
    element: document.querySelector('#upload-file'),
    control: document.querySelector('.img-upload__control'),
  };

  const onFileUpload = (e) => {
    e.preventDefault();
    form.open(file);
  };

  file.element.addEventListener('change', onFileUpload);
};

export {addFileUploadHandler};
