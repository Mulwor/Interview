// ! Array.prototype.filter() - создаёт новый массив со всеми элементами, которые прошли проверку

// * Синтаксис: filter(function callbackFn(element, index, array) { ... }, thisArg)

// * Параметры: 

/* 
  * 1. callback: Функция, которая будет вызвана для каждого элемента массива. Аргументы:
  * - element: Текущий обрабатываемый элемент массива.
  * - index (необязательный): Индекс текущего обрабатываемого элемента массива.
  * - array (необязательный): Массив, по которому осуществляется проход.
*/

// * 2. thisArg (необязательный): Значение, используемое в качестве this при вызове функции callback.

// Todo: фильтрация по возрасту 
const example_1 = [32, 33, 16, 18, 22, 40];
example_1.filter((age) => age >= 18);                                        // * [32, 33, 18, 22, 40]



// Todo: фильтрация по положительным/отрицательным числам
let example_2 = [-1, 5, 12, 8, -2, 130, -3, 44, 81]
example_2.filter((number) => number >= 0)                                    // * [5, 12, 8, 130, 44, 81]
example_2.filter((number) => number < 0)                                     // * [-1, -2, -3]
example_2.filter((number) => number % 2)                                     // * [-1, 5, -3, 81]
example_2.filter((number) => number >= 0 && number <= 12)                    // * [5, 12, 8] 



// Todo: фильтрация по строкам
const example_3  = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
example_3.filter((word) => word.length > 6);                                 // * ["exuberant", "destruction", "present"]



// Todo: фильтрация только по числам и по строкам
const example_4 = [1, 2, 'aasf', '1', '123', 123]
example_4.filter((step) => typeof step !== 'string')                         //  * [1, 2, 123]
example_4.filter((step) => typeof step !== 'number')                         //  * ['aasf', '1', '123']



// Todo: фильтрация только обычных чисел, не внутренних массивов
let exampleUniq = [1, 2, [3, 4], 5, [6, 7]];
exampleUniq.filter(item => !Array.isArray(item));                            // * [1, 2, 123]
exampleUniq.filter(item => !Array.isArray(item));                            // * [1, 2, 5]

// * Пример замены .filter() на цикл

const arrayExample = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    arrayExample.push(numbers[i]);      // [1, 7, 12]
  }
}
