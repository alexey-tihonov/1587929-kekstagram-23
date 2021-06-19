const initModalSocialComments = (template, comments) => {
  const listFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const socialComment = template.cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__text').textContent = comment.message;
    listFragment.appendChild(socialComment);
  });
  return listFragment;
};

const hideModalSocialCommentsCount = (element) => {
  element.querySelector('.social__comment-count').classList.add('hidden');
  element.querySelector('.comments-loader').classList.add('hidden');
};

const initModal = (element, picture) => {
  const modalImg = element.querySelector('img');
  const modalSocialComments = element.querySelector('.social__comments');
  const socialCommentTemplate = modalSocialComments.querySelector('.social__comment');
  modalImg.src = picture.url;
  modalImg.alt = picture.description;
  element.querySelector('.social__caption').textContent = picture.description;
  element.querySelector('.likes-count').textContent = picture.likes;
  element.querySelector('.comments-count').textContent = picture.comments.length;
  modalSocialComments.innerHTML = '';
  modalSocialComments.appendChild(initModalSocialComments(socialCommentTemplate, picture.comments));

  hideModalSocialCommentsCount(element);
};

const closeModal = function() {
  this.element.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const openModal = function(picture) {
  initModal(this.element, picture);
  this.element.classList.remove('hidden');
  document.body.classList.add('modal-open');

  this.closeButton = this.element.querySelector('.big-picture__cancel');
  this.closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    this.closeModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      this.closeModal();
    }
  });
};

const modal = {
  element: document.querySelector('.big-picture'),
  openModal,
  closeModal,
};

export {modal};
