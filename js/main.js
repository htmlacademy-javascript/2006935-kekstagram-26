// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNumber(from, to) {

  let insideFrom = from;
  let insideTo = to;


  if (insideFrom < 0 || insideTo < 0) {
    return 'Во входном значении есть отрицательное число';
  }
  // Если значение ДО меньше чем значение ОТ, то меняем их местами (способ нашёл здесь: https://habr.com/ru/post/657625/)
  if (insideTo <= insideFrom) {
    insideFrom = insideFrom+insideTo;
    insideTo = insideFrom-insideTo;
    insideFrom = insideFrom-insideTo;
  }
  // Нашёл функцию на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  insideFrom = Math.ceil(insideFrom);
  insideTo = Math.floor(insideTo);
  return Math.floor(Math.random() * (insideTo - insideFrom + 1)) + insideFrom;
}

// Функция для проверки максимальной длины строки

function checkMaxLength(comment, maxLength) {
  return comment.length < maxLength;
}

checkMaxLength('Раз, два, три, четыре, десять', 13);
getRandomNumber(0, 20);
