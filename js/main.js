function getRandomArbitrary(min, max, maxDigits = 0) {
    if (min > max || min < 0 || max <= 0) {
      return ("Заданы неверные значения. Введите другие значения");
    }

    const digitsDegree = 10 ** maxDigits;
    return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  }
  getRandomArbitrary(1, 2, 6);
