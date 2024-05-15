Array

Методы:  Array.prototype

- .reverse() - меняет содержимое массиво в обратном направлении. Он не создает новый массив, 
а меняет текуший

```
const array = [1, 2, 3]
array.reverse()                        // [3, 2, 1]
```

- .join() - объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива). 

```
1. let arr = [1, 2, 3];
arr.join();                               // '1,2,3'
arr.join('');                             // '123'
arr.join('-')                             // '1-2-3'
2. let date = '2025-12-31';
date.split('-').reverse().join('.');      // 31.12.2025
```
- .toString() - возвращает строку взятые из массива

```
let items = ["JavaScript", 1, "a", 3];
items.toString();                         // JavaScript,1,a,3

```

- .concat() - если у нас несколько массивов, то он объединяет их в один общий
```
1. 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
array1.concat(array2);                           // [a, b, c, d, e, f]

2. 
var alpha = ["a", "b", "c"];
var alphaNumeric = alpha.concat(1, [2, 3]);       //  ['a', 'b', 'c', 1, 2, 3]
```

- .reduce() -  используется для преобразования массива в одно значение (например, число, строку или объект) путем применения функции к каждому элементу массива и накоплению результата. Синтаксис: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

1. callback - функция, которая будет применена к каждому элементу массива. Она принимает четыре аргумента: 

- accumulator (аккумулятор)
- currentValue (текущий элемент)
- index (индекс текущего элемента)
- array  (исходный массив)

2. initialValue (необязательный) - начальное значение аккумулятора.

```
1. 
const numbers = [1, 2, 3, 4, 5];
numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);       // 15
numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);    // 5

2. 
const words = ['Hello', 'world', '!'];
const sentence = words.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue, '');  // => Hello world !
```

- .indexOf() - возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет;

```
var array = [2, 5, 9];
array.indexOf(2);                                     // 0
array.indexOf(7);                                     // -1
array.indexOf(9, 2);                                  // 2
array.indexOf(2, -1);                                 // -1
array.indexOf(2, -3);                                 // 0
```


- slice() - возвращает новый массив, содержащий копию части исходного массива. Принимает 2 параметра: 
* begin - Индекс с которого начинает брать данные (также если мы его не укажем, то берет с 0 индекса), если он отрициательный, то берет с конца данные. Если begin больше длины последовательности вернётся пустой массив.
* end - индекс по которому заканчивается извлечения. Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2)        // ["camel", "duck", "elephant"]
animals.slice(-2)       // ["duck", "elephant"]
animals.slice(1, 5)     // ["bison", "camel", "duck", "elephant"]
animals.slice(2, 4)     // ["camel", "duck"]
animals.slice(2, -1)    // ["camel", "duck"]
animals.slice()         // ["ant", "bison", "camel", "duck", "elephant"]

```

- filter() -  создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.


```
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
words.filter((word) => word.length > 6);      // ["exuberant", "destruction", "present"]

```

- map() - позволяет трансформировать один массив в другой при помощи функций-колбэка. Переданная функция будет вызвана для каждого элемента массива по порядку. Из результатов вызова функции будет собран новый массив.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.map((num) => num * num)                   // [1, 4, 9, 16, 25, 36, 49, 64, 81]

- Array.from() - создаёт новый массив на основе переданного объекта. Объект должен быть либо массивоподобным (как строка или объект arguments), либо итерируемым (как Set или Map).