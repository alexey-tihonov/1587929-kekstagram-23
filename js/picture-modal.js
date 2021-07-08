import {modal} from './modal.js';

const pictureModal = {...modal};

const initPictureModalSocialComments = (template, comments) => {
  const listFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const socialComment = template.cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__text').textContent = comment.message;
    listFragment.appendChild(socialComment);
  });
  return listFragment;
};

const hidePictureModalSocialCommentsCount = (element) => {
  element.querySelector('.social__comment-count').classList.add('hidden');
  element.querySelector('.comments-loader').classList.add('hidden');
};

const onClosePictureModal = () => false;

pictureModal.init(document.querySelector('.big-picture'), false, onClosePictureModal);

pictureModal.create = function (picture) {
  const modalImg = this.element.querySelector('img');
  const modalSocialComments = this.element.querySelector('.social__comments');
  const socialCommentTemplate = modalSocialComments.querySelector('.social__comment');
  modalImg.src = picture.url;
  modalImg.alt = picture.description;
  this.element.querySelector('.social__caption').textContent = picture.description;
  this.element.querySelector('.likes-count').textContent = picture.likes;
  this.element.querySelector('.comments-count').textContent = picture.comments.length;
  modalSocialComments.innerHTML = '';
  modalSocialComments.appendChild(initPictureModalSocialComments(socialCommentTemplate, picture.comments));

  hidePictureModalSocialCommentsCount(this.element);
  this.open();
};

export {pictureModal};

