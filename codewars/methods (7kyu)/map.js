// ! Array.prototype.map() - перебирает и создает новый массив с условиями, которые мы указали

// * Параметры: 

/* 
  * 1. callback: Функция, которая будет вызвана для каждого элемента массива. Аргументы:
  * - currentValue: Текущий обрабатываемый элемент массива.
  * - index (необязательный): Индекс текущего обрабатываемого элемента массива.
  * - array (необязательный): Массив, по которому осуществляется проход.
*/

// * 2. thisArg (необязательный): Значение, используемое в качестве this при вызове функции callback.

// Todo: простой пример c перебором значений
const example_1 = [1, 2, 3, 4, 5];
example_1.map((element) => element * 2)                       //* [2, 4, 6, 8, 10]
example_1.map((element, index) => element * index);           //* [0, 2, 6, 12, 20]



// Todo: также работает с другими методами
const example_2 = [1, 4, 9];
example_2.map((num) => Math.sqrt(num));                       //* [1, 2, 3]


// Todo: простой пример деструктиразации и работы с map
const persons = [
  { name: "Jack", age: 19 },
  { name: "John", age: 10 },
  { name: "Sam", age: 65 },
  { name: "Jane", age: 7 },
]

persons.map(({name}) => name)          // ['Jack', 'John', 'Sam', 'Jane']


// todo: немного усложненный метод
const users = [
  { "name": ' Ivan', 'order': 12, 'sum': '123,5' },
  { "name": 'Sergey    ', 'order': 12, 'sum': '123,5' },
  { "name": 'Matilada   ', 'order': 12, 'sum': '123,5' },
  { "name": ' Ivanove Petrov', 'order': 12, 'sum': '123,5' },
]

// * Преобразует имена в нижний регистр и удаляет все пробелы
users.map((item => {
  item.name = item.name.trim().toLocaleLowerCase();
  return item;
}))