Array:

--- 

1. Array.prototype.reduce() - используется для вычисления. 

Классический вариант подсчета: 
`const sum = arr.reduce((first, second) => first + second, 0);`

Когда у нас два элемента в массиве. Например: [10,0], [3,5], [5,8] - который в начале сложит все значение внутри первого элемента, а затем вычтет их. 
`busStops.reduce((rem, [on, off]) => rem + on - off, 0)` 

2. Array.prototype.indexOf() - возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
let array = [2, 5, 9];
array.indexOf(2);            // 0
array.indexOf(7);            // -1
array.indexOf(9, 2);         // 2
array.indexOf(2, -1);        // -1
array.indexOf(2, -3);        // 0

3. Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));    // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]


`Array.from()` => создаёт новый экземпляр Array из массивоподобного (это объект, который структурно похож на массив) или итерируемого объекта.

