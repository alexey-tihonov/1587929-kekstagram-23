import {createPosts} from './data.js';

const posts = createPosts();
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureListElement = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();

posts.forEach((post) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  window.console.log(post);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  listFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(listFragment);
