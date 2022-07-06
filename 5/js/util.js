// Функция, возвращающая случайное целое число из переданного диапазона включительно (принёс Кекс).

function getRandomNumber (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrayElement(elements) {
  return elements[getRandomNumber(0, elements.length-1)];
}


// Функция для проверки максимальной длины строки

// function checkMaxLength(string, maxLength) {
//   return string.length <= maxLength;
// }

export {getRandomNumber};
export {getRandomArrayElement};
