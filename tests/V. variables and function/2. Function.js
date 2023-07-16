/* 
    * Темы
    ! 1. Разница между function declaration и function expression
    ! 2. IIFE
    ! 3. Как передаются параметры в функцию по ссылке по значению
    ! 4. Что такое чистая функция
    ! 5. Разница между обычными функциями и стрелочными?
    ! 6. Что обозначает this в JavaScript?
    ! 7. Разница между .call(), .apply() и bind()?
    ! 8. Что такое мемоизация. Реализуйте базовую логику функции для мемоизации

*/

// ! Разница между function declaration и function expression
sayHi("Вася");                   // Привет, Вася

function sayHi(name) {
  alert( "Привет, " + name );
}

sayHi("Вася");                   // ошибка!

let sayHi = function(name) {
  alert( "Привет, " + name );
}

// ! IIFE
(function() {
    console.log("Hi there!")
})();


var result = (function () {
    var name = "Barry";
    return name;
})();
result;                         // * "Barry" 

// ! Как передаются параметры в функцию по ссылке по значению

// * Передача по значению (пример №1)

let n = 10;
console.log('n before change:', n); // n before change: 10

function change(x) {
  x = 2 * x;
  console.log('x in change:', x);
}

change(n); // x in change: 20
console.log('n after change:', n); // n after change: 10

// * Передача по ссылке (пример №2)
let bob = {
  name: 'Bob',
};

console.log('before change:', bob.name); // Bob

function change(user) {
  user.name = 'Tom';
}
change(bob);
console.log('after change:', bob.name); // Tom

// * Передача и по ссылке и по значению (пример №3)
function changeStuff(a, b, c) {
  a = a * 10;
  b.item = 'changed';
  c = {
    item: 'changed',
  };
}

let num = 10;
let obj1 = { item: 'unchanged' };
let obj2 = { item: 'unchanged' };

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item); // "changed"


// ! Чистая функция
function calculateGST( productPrice ) {  return productPrice * 0.05;  }
const add = (x, y) => x + y;            add (4, 4);

// ! Нечистая функцияя
let tax = 20;
function calculateGST( productPrice ) { return productPrice * (tax / 100) + productPrice;}
tax = 24 
// * Зависит от внешней переменной и при передаче одного и того же аргумента поттенциально
// * может возвращать разные результаты.



// ! 7. Мемоизация
const memoize = (fn) => {
  const cache = {}
  return function(param) {
    if (cache[param]) {
      return cache[param];
    } else {
      const result = fn(param)
      cache[param] = result;
      return result;
    }
  }
}

const toUpper = (str = "") => str.toUpperCase();
const toMemo = memoize(toUooer);
toUpperMemoize("Yauhem")
toUpperMemoize("Yauhem")


// * Другой пример

// простая чистая функция, которая возвращает сумму аргумента и 10
const va = (n) => (n + 10);
console.log('Simple call', va(3));
// простая функция, принимающая другую функцию и
// возвращающая её же, но с мемоизацией
const dd = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // тут работаем с единственным аргументом
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
// создание функции с мемоизацией из чистой функции 'va'
const dddva = dd(va);
console.log(dddva(3));  // вычислено
console.log(dddva(3));  // взято из кэша
console.log(dddva(4));  // вычислено
console.log(dddva(4));  // взято из кэша
