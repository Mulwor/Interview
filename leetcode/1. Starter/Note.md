Array.prototype.concat() - используется для объединения двух, или более массивов в один, при этом он не изменяет существующие массивы, а возвращает новый массив.

```
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));       // ["a", "b", "c", "d", "e", "f"]
```


String.prototype.replaceAll() - первый аргументом то, что нужно найти, а вторым на что заменить. 

```
const my_string = "I like dogs because dogs are adorable!";
let pattern = "dogs";
let replacement = "cats";

console.log(my_string.replaceAll(pattern, replacement))  // I like cats because cats are adorable
```


Number.prototype.toFixed() - форматирует число, используя запись с фиксированной запятой.

```
var numObj = 12345.6789;

numObj.toFixed();       // 12346
numObj.toFixed(1);      // 12345.7


var numObj = 309.65;
numObj.toFixed(5);       // 309.650
```