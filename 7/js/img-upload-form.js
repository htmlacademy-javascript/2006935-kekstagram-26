const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imageEditForm = uploadForm.querySelector('.img-upload__overlay');
const imageEditCancel = uploadForm.querySelector('#upload-cancel');

const imgUploadForm = document.querySelector('.img-upload__form');
// const imgUploadtext = document.querySelector('.img-upload__text');
const hashtagsElement = imgUploadForm.querySelector('.text__hashtags');
const commentElement = uploadForm.querySelector('.text__description');

// Открыть/закрыть
uploadFile.addEventListener('change', () => {
  imageEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      /*
      Так работает, но в консоли ошибка:
      Uncaught TypeError: evt.key.stopPropagation is not a function
    at HTMLDocument.
      */
      if (document.activeElement === hashtagsElement || document.activeElement === commentElement){
        evt.key.stopPropagation();
      }
      imageEditForm.classList.add('hidden');
      document.body.classList.remove('modal-open');
      uploadForm.reset();
    }
  });

  imageEditCancel.addEventListener('click', () => {
    imageEditForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    uploadForm.reset();
  });
});


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field--invalid',
  successClass: 'img-upload__field--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error'
});

// Валидируем хештэги

// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// один и тот же хэш-тег не может быть использован дважды;
function isHashtagRepeat (value) {
  const hashtagsLower = value.toLowerCase();
  const hashtagsArray = hashtagsLower.split(' ');
  const arr = [];
  // Проверяем элемент, начиная с первого с каждым последующим. Когда все последующие проверены, проверяем второй элемент со следующими за ним, так как с первым проверка уже была. И так далее.
  for (let currentIndex = 0; currentIndex < hashtagsArray.length - 1; currentIndex++){
    for (let comparableElementIndex = currentIndex + 1; comparableElementIndex < hashtagsArray.length; comparableElementIndex++) {
      if (hashtagsArray[currentIndex] === hashtagsArray[comparableElementIndex]) {
        arr.push(true);
      }
      arr.push(false);
    }
  }
  return !arr.includes(true);
}

pristine.addValidator(hashtagsElement,
  isHashtagRepeat,
  'У вас тут хэш-тег повторяется. Не надо так :)');

// хэш-тег начинается с символа # (решётка);
// строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// хеш-тег не может состоять только из одной решётки;
// максимальная длина одного хэш-тега 20 символов, включая решётку;
// хэш-теги разделяются пробелами;
function isHashtagsValid (value) {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}\s*$/;
  const hashtagsArray = value.split(' ');
  const booleanCountArray = [];
  for (let i = 0; hashtagsArray.length > i; i++) {
    booleanCountArray.push(re.test(hashtagsArray[i]));
  }
  if (value.length === 0) {
    return true;
  }
  return !booleanCountArray.includes(false);
}
pristine.addValidator(hashtagsElement,
  isHashtagsValid,
  'хэш-тег: должен начинаться с #, не может содержать пробел, спецсимволы, символы пунктуации и т. д., не может состоять только из #, максимальная длина 20 символов');

// нельзя указать больше пяти хэш-тегов;
function checkHashtagsAmount (value) {
  return value.split(' ').length <= 5;
}
pristine.addValidator(hashtagsElement, checkHashtagsAmount, 'Нельзя указать больше пяти хэш-тегов');


// Валидируем комментарии

function validateLengthMessage (value) {
  return value.length <= 140;
}
pristine.addValidator(commentElement, validateLengthMessage, 'Длина комментария не может быть больше 140 символов');

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()){
    evt.preventDefault();
  }
});
