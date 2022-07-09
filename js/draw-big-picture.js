
const picture = document.querySelector('.big-picture');
const image = picture.querySelector('.big-picture__img');
const pictureSource = image.querySelector('img').src;
const pictureLikesCount = picture.querySelector('.likes-count').textContent;
const pictureCommentsCount = picture.querySelector('.comments-count').textContent;

// Открыть со всеми выытекающими
const socialCommentCount = picture.querySelector('.social__comment-count');
const commentsLoader = picture.querySelector('.comments-loader');
const openPicture = function () {
  picture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
};

// Закрыть
const pictureClose = picture.querySelector('.big-picture__cancel');

pictureClose.addEventListener('click', () => {
  picture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    picture.classList.add('hidden');
  }
});

export {openPicture};
