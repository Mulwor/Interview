// ? 1. O(1) - константная сложность - код выполняется за одно и то же время и 
// ? никак не зависит от размера входных данных.

// !=============================== Пример №0 =================================

// * Обе переменные имеют О(1)
let a = 10; 
let b = a;

// !=============================== Пример №1 =================================

if (a > 5) {} 

// !=============================== Пример №2 =================================

// * Кол-во итераций не зависит от размера входных данных и является постоянным
for(let i = 0; i < 100; i++) {}

// !=============================== Пример №3 =================================

function createHelloWorld() {
  return "Hello World";
}
createHelloWorld()

// !=============================== Пример №4 =================================

function getFirstElement(arr) { 
  return arr[0]; 
}
getFirstElement([1, 2, 3, 4, 5]);

// !=============================== Пример №5 ================================

function isEven(number) { 
  return number % 2 === 0 
}
isEven(10);

// !=========================== Дополнительная информация ====================
// ? Также данную сложность имеют следующие методы в javascript:
// ? 1. Array.prototype.pop()
// ? 2. Array.prototype.push() 