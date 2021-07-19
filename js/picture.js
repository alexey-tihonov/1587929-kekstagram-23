import {pictureModal} from './picture-modal.js';

const addPictureClickHandler = (element, posts) => {
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('picture__img')) {
      e.preventDefault();
      const pictureIndex = e.target.parentElement.dataset.index;
      pictureModal.create(posts[pictureIndex]);
    }
  });
};

const removePictures = (сontainer) => {
  const elements = сontainer.querySelectorAll('.picture');
  elements.forEach((element) => {
    сontainer.removeChild(element);
  });
};

const renderPictures = (posts) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const listFragment = document.createDocumentFragment();

  removePictures(pictureListElement);

  posts.forEach((post, index) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.index = index;
    pictureElement.querySelector('.picture__img').src = post.url;
    pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = post.likes;
    listFragment.appendChild(pictureElement);
  });

  //pictureListElement.innerHTML = '';
  pictureListElement.appendChild(listFragment);
  addPictureClickHandler(pictureListElement, posts);
};

export {renderPictures};
