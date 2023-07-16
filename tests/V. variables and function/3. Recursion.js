


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


// ! ===============================================

// * канал: WebDev канал с нуля + дополнительная инфа с code.mu

// * Пример №1 => Без использование рекурсии у нас выведится число просто

let first = 0;
function firstF() {
  first++;
  console.log(first)
}
firstF();                  // 1

// * Пример №2 => Если будем использовать рекурсивный (вызов функции внутри самой себя), то это создаст 
// * бесконечный цикл (до тех пор пока стек вызова не переполнится)

let second = 0;
function secondF() {
  second++;
  console.log(second);
  secondF();
}
secondF();            


// * 3. Если мы хотим избежать так называемого бесконечно цикла, то нам необходимо прописать условия. Например

let third = 0;
function thirdF() {
  third++;
  console.log(third);
  if (t === 100) return; 
  thirdF();
}
thirdF();     

let fourth = 0;
function fourthF() {
  fourth = fourth + 2;
  console.log(fourth);
  if (fourth > 99) return fourth;
  fourthF();
}
fourthF();


// * 4. => Удаление элементов из массива через рекурсию
function func(arrs) {
  console.log(arrs.shift(), arrs);

  if (arrs.length !== 0) {
    func(arrs);
  }
}

func([1, 2, 3]);


// * 5. => Сложение элементов с помощью рекурсии
function getSum(arr) {
  let sum = arr.shift();
  if (arr.length !== 0) {
    sum += getSum(arr);
  }
  return sum;
}

console.log(getSum([1, 2, 3]));




// * 6. => Возведение в степень с помощью рекурсии
const pow = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
};
pow(2, 3);



// *7. => Задачи с кодеварса

/*
Задачи на факторил будущее: 
 https://www.codewars.com/kata/search/my-languages?q=recursion&r%5B%5D=-7&beta=false&order_by=sort_date%20desc
*/