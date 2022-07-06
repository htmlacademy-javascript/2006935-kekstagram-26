import {generateDescriptionsList} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureThumbnails = generateDescriptionsList(9);

const drawThumbnails = document.createDocumentFragment();

pictureThumbnails.forEach(({url, likes, comments}) => {
  const pictureThumbnail = pictureTemplate.cloneNode(true);
  pictureThumbnail.querySelector('.picture__img').src = url;
  pictureThumbnail.querySelector('.picture__comments').textContent = likes;
  pictureThumbnail.querySelector('.picture__likes').textContent = comments.length;
  drawThumbnails.appendChild(pictureThumbnail);
});

pictures.appendChild(drawThumbnails);
