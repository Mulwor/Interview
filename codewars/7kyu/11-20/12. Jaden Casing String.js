// ! 12. Jaden Casing String

// * Your task is to convert strings to how they would be written by 
// * Jaden Smith. The strings are actual quotes from Jaden Smith, but
// * they are not capitalized in the same way he originally typed them.

// * How can mirrors be real if our eyes aren't real => How Can Mirrors Be Real If Our Eyes Aren't Real

// ! ================================ Первое решение =================================

String.prototype.toJadenCase = function () {
  let result = this.split(" ")

  // 0 индекс превращается в верхний регистр, а все остальные начия с
  // 1 индекса добавляются к нему с помощью сложение
  return result.map((item) => item[0].toUpperCase() + item.slice(1)).join(" ")
};

// ! ================================ Второе решение =================================

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// ! ================================ Третье решение =================================

String.prototype.toJadenCase = function () {
  let result = '';
  
  // * Преобразовывает первую букву в верхний регистр и добавляется в result
  result += this[0].toUpperCase();
  
  // * Цикл по остальным символам строки начиная со второй буквы
  for (let i = 1; i < this.length; i++) {
    // * Проверка на пробел и преобразование следующей буквы
    if (this.charAt(i) == " ") {
      // * Если текущий символ this.charAt(i) является пробелом, добавляется пробел и 
      // * следующая буква, преобразованная в заглавную.
      result += (this[i] + this[i + 1].toUpperCase());
      i++;
    } else {
      // Если текущий символ не пробел, он просто добавляется к result.
      result += this[i];
    }
  }
  
  return result;
};

// ! ================================ Четвертое решение =================================

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};



