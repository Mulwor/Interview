// !!! TODO: Замыкание, область видимости, рекурсия

// 1. Замыкание
function test() {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  };
}

let func1 = test();
func1();
func1();

let func2 = test();
func2();
func2();

// 2. Замыкание
function func() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
}

func()();
func()();
func()();

/* То есть каждый вызов функции test таким образом: test()(), 
создает свою функцию со своим замыканием и сразу же вызывает эту функцию. 
()() => let func1 = test() => func1();  //выведет 1
function test() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
};

let func1 = test(); // первая функция
func1();  //выведет 1

let func2 = test(); // вторая функция
func2();  //выведет 1
*/

// 3. Замыкание
function func() {
  let num = 0;
  return function () {
    console.log(num);
    num++;
  };
}

let test = func;
test()();
test()();
test()();

// 4. Замыкание
let num = 1;
function test() {
  return function () {
    console.log(num);
    num++;
  };
}
let func4 = test();
func4();
func4();
let func5 = test();
func5();
func5();

// 5. Замыкание
let counter = 0;
function test() {
  return function () {
    console.log(counter);
    counter++;
  };
}

let func = test;
let func6 = func();
let func7 = func();
func6();
func7();
func6();
func7();

// 6. Замыкание
function test() {
  let counter = 0;
  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
}

let func = test()();
let func8 = func;
let func9 = func;
func8();
func9();
func8();
func9();

// 7. Замыкание
function test() {
  let counter = 0;
  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
}

let func = test();
let func10 = func();
let func11 = func();
func10();
func11();
func10();
func11();

// Область видимости
var a = 5;
// a = 5
function f() {
  // a = undefined
  if (a) {
    console.log(a);
    var a = 10;
  }
}
f();




// ! Рекурсия - возможность функции вызвать саму себя. Однако если мы не пропишем
// определенные условия, то рекурсия будет вызываться бесконечно

// Пример №1 => Бесконечный цикл
let a = 1;
function rec() {
  a++;
  // rec();
}



// Пример №2
let b = 1;
function recOne() {
  b++;
  console.log(b);
  if (b > 10) return b;
  recOne();
}
recOne();



// Пример №3 =
let c = 0;
function recSecond() {
  c = c + 2;
  console.log(c);
  if (c > 99) return с;
  recSecond();
}
recSecond();



// Пример №4 => (Удаление элементов из массива)
function func(arrs) {
  console.log(arrs.shift(), arrs);

  if (arrs.length !== 0) {
    func(arrs);
  }
}

func([1, 2, 3]);




// Пример №5 => (Сложение элемента из массива)
function getSum(arr) {
  let sum = arr.shift();
  if (arr.length !== 0) {
    sum += getSum(arr);
  }
  return sum;
}

console.log(getSum([1, 2, 3]));




// Пример №6
const pow = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
};
pow(2, 3);




// Контекст: { x: 2, n: 3, строка 1 } - первый цикл => pow(2, 3)
// Контекст: { x: 2, n: 2, строка 1 } - второй цикл => pow(2, 2)
// Контекст: { x: 2, n: 1, строка 1 } - третий вызов => pow(2, 1)
const transit = (x, n) => {
  if (n === 1) {
    return x; // Выход из рекурсии
  } else {
    // Контекст: { x: 2, n: 3, строка 5 } - первый цикл
    // Контекст: { x: 2, n: 2, строка 5 } - второй цикл
    return x * transit(x, n - 1);
  }
};
transit(2, 3); // 8

// Когда функция заканчивается, контекст её выполнения больше не нужен, поэтому он удаляется из памяти, а из стека восстанавливается предыдущий:
