// ! Ones and Zeros

// * Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// * Testing: [0, 0, 0, 1] ==> 1
// * Testing: [0, 0, 1, 0] ==> 2
// * Testing: [0, 1, 0, 1] ==> 5
// * Testing: [1, 0, 0, 1] ==> 9
// * Testing: [0, 0, 1, 0] ==> 2
// * Testing: [0, 1, 1, 0] ==> 6
// * Testing: [1, 1, 1, 1] ==> 15
// * Testing: [1, 0, 1, 1] ==> 11


const binaryArrayToNumber = arr => {
  let result = arr.join("")
  return parseInt(result, 2)
};

// ! Теория

// * Метод parseInt - преобразует строку в целое число. Преобразование произойдет, если 
// * только целое число стоит в начале строки, иначе будет выведено NaN.
parseInt('10px');                                  // 10
parseInt('10.3px');                                // 10 (дроби отбрасываются)
parseInt("100/1wh")                                // 100
parseInt("100*2")                                  // 100
parseInt('width: 100px');                          // NaN

// * А также у него есть второй опциональный параметр (radix) -  основание системы счисления 
// * (например, 2 для бинарной, 8 для восьмеричной, 16 для шестнадцатеричной).
parseInt("0001", 2)                                 // 1
parseInt("1111", 8)                                 // 585
parseInt("0111", 16)                                // 273
parseInt("1000", 2)                                 // 8
parseInt("1011", 2)                                 // 11

// * Отличие между toString() - преобразованием: 

// * 1. toString() - преобразовывает число в строку, а parseInt() - преобразовывает строку в число

// * 2. parseInt используется для преобразования строкового представления числа в указанной системе 
// * счисления в десятичное число. toString используется для преобразования десятичного числа в 
// * строковое представление в указанной системе счисления.