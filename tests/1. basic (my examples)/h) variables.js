console.log("------------------------- Переменные -----------------------------")

// TODO =>  Пример №1
var number  = 10; 
console.log(number);                         // ? 10
number = 22; 
console.log(number);                         // ? 22


// TODO => Пример №2
let specialLetFirst = 'Good morning!!';
specialLetFirst.name = 'John';
console.log(specialLetFirst.name);           // ? Undefined (нет такого значения)


// TODO => Пример №3
const firstExample = 5;
firstExample = 10;
console.log(firstExample);                   // ? Ошибка, так как const нельзя присовить новое значение


// TODO => Пример №4 => У варов - глобальная область видимости, блочная игнорируется
var weight = 10;
if (weight > 8) {
  var kilograms = `Вес ${weight} кг`;
  console.log(kilograms);                     // ? Вес: 10 кг.
}


console.log("------------------------- Временная мертвая зона-----------------------------")

// TODO => Пример №1 
console.log(foo);                           // * undefined
var foo = 123;


// Todo => Пример №2
var specialVarFirst;
console.log(specialVarFirst);               // * undefined
console.log(specialVarSecond);              // * undefined
var specialVarSecond = 1;


// TODO => Пример №3
console.log(foo);                           // * Error
let foo = 123;


// TODO => Пример №4
let age = 50;
function printAge() {
  console.log(age);
  let age = 30;
}
printAge();                                 // * Error


// TODO => Пример №5
console.log(animal);                      // * Uncaught ReferenceError: animal is not defined
if(true) {
  console.log(animal);                    // * Uncaught ReferenceError: Cannot access  'animal' before initialization
  const animal = "Parrot"
  console.log(animal);                    // * "Parrot"
}

console.log("------------------------- Замыкание и всплытие-----------------------------")


// TODO => Пример №1 => Замыкание
let secondExample = 1;
function secondFunction() {
  console.log(secondExample);
}
secondFunction();                           // * 1


// TODO => Пример №2 => Всплытие function и его назначение
function thirdFunction() {
  console.log(thirdExample);
}
let thirdExample = 1;
thirdFunction();                            // * 1
  

// TODO => Пример №3 
let fourthExample = 'Alex';
function fourthFunction() {
  console.log(`Hello ${fourthExample}`);
}
fourthExample = 'Hanna';
fourthFunction();                           // * "Hello Hanna"


// TODO => Пример №4 с объектом const
const fivethExample = {
  name: 'Вася',
};
fivethExample.name = 'Петя';
console.log(fivethExample);                 // * "Петя"


// TODO => Пример №5 => Необъявленная переменная и глобальная область видимости
var sixthValue = 1;
function sixthFuntion() {
  sixthValue = 2;                           // * Сначала присваивается значение 1, а затем 2
}
sixthFuntion();
console.log(sixthValue);                    // * 2


