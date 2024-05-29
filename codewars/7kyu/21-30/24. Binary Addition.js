// ! Binary Addition

// * Implement a function that adds two numbers together and returns their sum in binary. 
// * The conversion can be done before, or after the addition. The binary number returned 
// * should be a string.

function addBinary(a,b) {
  // Преобразовывает в двоичную систему счисление
  return (a + b).toString(2)
}

// ! Теория

// * - Данные метод не только преобразовывает число в строку, но также может преобразовать
// * двоичную систему счисления, восьмеричную, десятичную и шестнадцатеричную. 

(5).toString(2)                                                               // 101
let number = 255;

number.toString(2)                                         // "11111111" (двоичная)
number.toString(8)                                         // "377" (восьмеричная)
number.toString(16)                                        // "ff" (шестнадцатеричная)