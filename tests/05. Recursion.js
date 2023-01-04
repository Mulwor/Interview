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
