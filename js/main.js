import {createPosts} from './data.js';
import {renderPictures} from './picture.js';
import {addFileUploadHandler} from './file.js';

renderPictures(createPosts());
addFileUploadHandler();
