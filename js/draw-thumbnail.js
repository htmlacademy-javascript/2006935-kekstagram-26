import {generateDescriptionsList} from './data.js';
import {openPicture} from './draw-big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureThumbnails = generateDescriptionsList(9);

const drawThumbnails = document.createDocumentFragment();

//Для каждого сгенерированного объекта из pictureThumbnails
pictureThumbnails.forEach(({url, likes, comments, description}) => {
  const pictureThumbnail = pictureTemplate.cloneNode(true);
  pictureThumbnail.querySelector('.picture__img').src = url;
  pictureThumbnail.querySelector('.picture__comments').textContent = comments.length;
  pictureThumbnail.querySelector('.picture__likes').textContent = likes;

  //Затем по клику на элемент открываем большую картинку
  pictureThumbnail.addEventListener('click', () => {
    openPicture(url, likes, comments, description);
    // addComments(comments);
  });

  drawThumbnails.appendChild(pictureThumbnail);
});

pictures.appendChild(drawThumbnails);
