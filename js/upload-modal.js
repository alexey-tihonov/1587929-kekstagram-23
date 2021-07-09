import {modal} from './modal.js';

const uploadFileModal = {...modal};

const openUploadFileModal = (element, target, callBack) => {
  uploadFileModal.init(element, target, callBack);
  uploadFileModal.open();
};

export {openUploadFileModal};
