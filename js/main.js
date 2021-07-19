import {getData} from './server.js';
import {renderPictures} from './picture.js';
import {addFileUploadHandler} from './file.js';
import {message} from './message.js';
import {filter} from './filter.js';

getData(
  (posts) => {
    renderPictures(posts);
    filter.show(posts);
  },
  (err) => {
    message.render(false, err, 'Закрыть');
  });

addFileUploadHandler();
