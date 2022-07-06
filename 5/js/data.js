import {getRandomNumber} from './util.js';
import {getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_DESCRIPTIONS = [
  'Моя кровать — это волшебное место. Стоит улечься, как я вспоминаю все, что мне нужно было сделать.',
  'Пятница — мое второе любимое слово на букву «П».',
  'Wine + dinner = winner (непереводимо, но очень понятно).',
  'Какая разница, что обо мне думают люди, если для комаров я привлекательна в любом виде?',
  'Говорят: делай, что любишь, и деньги сами придут к тебе. Только что заказала пиццу. Жду…',
  'Невозможно жить полной жизнью на пустой желудок!',
  'В жареной картошке нет слова «мы». Этот тот случай, когда каждый за себя!',
  'Самая большая ложь: еще одно печенье, посплю еще одну минуту…',
  'Знаю, что голоса в моей голове не настоящие, но иногда их идеи просто потрясающие!',
  'Сегодня отличный день — для торта…',
  'Мои детские наказания стали моими взрослыми целями.',
  'Если ваша дружба не такая же тесная, как школьные джинсы, то зачем она вообще нужна?',
  'Будьте счастливы, это сводит людей с ума.',
  'Шоколад не задает глупых вопросов, шоколад понимает меня с полуслова.',
  'Сегодня даже мой кофе нуждается в кофе.',
  'Никогда не знаешь, что у тебя есть, пока не уберешься в доме.',
  'Если вы искали знак, то вот он. Можете не благодарить!',
  'Жизнь слишком коротка для плохих предчувствий.',
  'Хотите изменить этот мир, покажи пример. Ваше мнение ничего не поменяет!',
  'Помните, что счастье — это путешествие, а не пункт назначения. Получайте удовольствие от любого процесса, а не возлагайте все надежды на результат. Иногда он может не оправдать ожиданий. Но зато, каким увлекательным был путь…',
];

const NAMES = [
  'Кекс',
  'Иоган Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const SURNAMES = [
  'Ремарк',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Клапка Джером',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'Козлобородик'
];

// Одно или два случайных предложения для комментария

function getRandomComment () {
  let message;
  const str1 = getRandomArrayElement(MESSAGES);
  const str2 = getRandomArrayElement(MESSAGES);
  if (getRandomNumber(1, 2) === 1 || str1 === str2) {
    message = str1;
  } else if (str1 !== str2) {
    message = `${str1} ${str2}`;
  }
  return message;
}

function createComment() {
  return {
    id: '',
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomComment (),
    name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
  };
}

//Функция создания случайного массива неповторяющихся значений.

function getArrayRandomNumber (maxArrayValue) {
  const randomArray = [];
  while (randomArray.length < maxArrayValue) {
    const randomNumber = getRandomNumber(1, maxArrayValue);
    if (randomArray.indexOf(randomNumber) === -1) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
}

// Генератор комментариев

function generateCommentsList (commentsQuantity, maxIdNumber) {
  if (maxIdNumber < commentsQuantity) {
    return 'Количесво ID не может быть меньше количества комментариев';
  }
  const commentsList = [];
  const idArray = getArrayRandomNumber(maxIdNumber);
  for (let i = 0; i < commentsQuantity; i++) {
    commentsList.push(createComment());
    commentsList[i].id = idArray[i];
  }
  return commentsList;
}

function createPhotoDescription () {
  return {
    id: '',
    url: '',
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: generateCommentsList(10, 100),
  };
}

function generateDescriptionsList (descriptionsQuantity) {
  const descriptionsList = [];
  const idArray = getArrayRandomNumber(descriptionsQuantity);
  // Чтобы значение id и число в адресе фото не повторялись, делаю ещё один массив
  const numbersArray = getArrayRandomNumber(descriptionsQuantity);
  for (let i = 0; i < descriptionsQuantity; i++) {
    descriptionsList.push(createPhotoDescription());
    descriptionsList[i].id = idArray[i];
    descriptionsList[i].url = `photos/${numbersArray[i]}.jpg`;
  }
  return descriptionsList;
}

export {generateDescriptionsList};
