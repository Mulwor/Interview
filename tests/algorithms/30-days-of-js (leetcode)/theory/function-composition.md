Композиция - создание сложной функциональности за счет объединения более простых функций. В некотором смысле, композиция - это вложение функций, каждая из которых передает свой результат в качестве входных данных для другой функции. 

Например, у нас есть функция a, которая принимает x и возвращает х + 2. Также есть функция b, которая также принимает x и возвращает х * 3:

```
const a = x => x + 2;
const b = x => x * 3;
```

Композиция - это акт объединения этих функций, в следствии которого выходные данные одной функции становятся входными данными следующей. 

```
const a = x => x + 2;
const b = x => x * 3;
console.log(a(b(5))); // 17
```

```
const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} `.repeat(3);

console.log(repeat(exclaim(upperCase("I love coding"))) // I LOVE CODING! I LOVE CODING! I LOVE CODING!);
```