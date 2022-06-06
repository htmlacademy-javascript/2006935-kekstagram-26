// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNumber(from, to) {
  if (from < 0 || to < 0) {
    return 'Во входном значении есть отрицательное число';
  };
  // Если значение ДО меньше чем значение ОТ, то меняем их местами (способ нашёл здесь: https://habr.com/ru/post/657625/)
  if (to <= from) {
    from = from+to;
    to = from-to;
    from = from-to;
  };
  // Нашёл функцию на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};


// Функция для проверки максимальной длины строки

function checkMaxLength(comment, maxLength) {
  return comment.length < maxLength;
};
