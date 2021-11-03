function getRandomArbitrary(min, max) {
  if (min >= 0 && max > 0 && min < max) {
  if (min === max) {
  return Math.round(min);
  }
  return Math.random() * (max - min) + min;
  }
  return('Задан неверный диапазон! Укажите другие числа.');
  }
  getRandomArbitrary(12, 118);