// ! Number method
// * Number.isNaN() - проверяет является ли значение переданно Нанном

Number.isNaN(NaN);                       // ? true
Number.isNaN(Number.NaN);                // ? true
Number.isNaN(0 / 0)                      // ? true
Number.isNaN('NaN');                     // ? false
Number.isNaN(undefined);                 // ? false
Number.isNaN(null || undefined);         // ? false


// * Number.isFinite() - определяет, является ли переданное значение конечным числом.\
Number.isFinite(Infinity);               // ? false
Number.isFinite(NaN);                    // ? false
Number.isFinite(-Infinity);              // ? false
Number.isFinite(0);                      // ? true
Number.isFinite(2e64);                   // ? true
Number.isFinite('0');                    // ? false, при использовании глобальной функции isFinite('0') было бы true


// * Number.parseInt() - разбирает строковый аргумент и возвращает целое число
Number.parseInt("10");                   // ? 10
Number.parseInt("10.00");                // ? 10
Number.parseInt("10.33");                // ? 10
Number.parseInt("34 45 66");             // ? 34
Number.parseInt(" 60 ");                 // ? 60
Number.parseInt("40 years");             // ? 40
Number.parseInt("He was 40");            // ? NaN


// * Number.Prototype.toString() - преобразовывает число в строку
(10).toString();                        // ? "10"
(17).toString();                        // ? "17"
(17.2).toString();                      // ? "17.2"
(6).toString(2);                        // ? "110"
(254).toString(16);                     // ? "fe"
(-10).toString(2);                      // ? "-1010"
(-0xff).toString(2);                    // ? "-11111111"


// ! Math method
// * `Math.abs()` - возвращает абсолютное значение числа. Если это пустые кавычки или пустой массив, то это
Math.abs(-Infinity);                    // ? Infinity
Math.abs(-1);                           // ? 1
Math.abs(-0);                           // ? 0
Math.abs(0);                            // ? 0
Math.abs(1);                            // ? 1
Math.abs(Infinity);                     // ? Infinity
Math.abs("-1");                         // ? 1
Math.abs(-2);                           // ? 2
Math.abs(null);                         // ? 0
Math.abs("");                           // ? 0
Math.abs([]);                           // ? 0
Math.abs([2]);                          // ? 2
Math.abs([1, 2]);                       // ? NaN
Math.abs({});                           // ? NaN
Math.abs("string");                     // ? NaN
Math.abs();                             // ? NaN