/* 
        * Темы
    ! Variables: let, var, const
    ! Временная мертвая зона
    ! Замыкание (closure), область видимости (scope).


*/
var number  = 10; 
console.log(number);        // 10
number = 22; 
console.log(number);        // 20


var weight = 10;
if (weight > 8) {
    //*  У варов нет блочной области видимости он переходит в глобальную область видимости. 
    var kilograms = `Вес ${weight} кг`;
    console.log(kilograms);                  // * Вес: 10 кг.
}

// TODO => Primer

let specialLetFirst = 'Good morning!!';
specialLetFirst.name = 'John';
console.log(specialLetFirst.name);           // * Undefined (нет такого значения)

// TODO => Primer

const firstExample = 5;
firstExample = 10;
console.log(firstExample);                   // * Ошибка, так как const нельзя присовить новое значение

// TODO => Primer

let secondExample = 1;
function secondFunction() {
  console.log(secondExample);
}
secondFunction();                           // * 1

// TODO => Primer

function thirdFunction() {
  console.log(thirdExample);
}
let thirdExample = 1;
thirdFunction();                            // * 1
  
// TODO => Primer

let fourthExample = 'Alex';
function fourthFunction() {
  console.log(`Hello ${fourthExample}`);
}
fourthExample = 'Hanna';
fourthFunction();                           // * "Hello Hanna"

// TODO => Primer с объектом

const fivethExample = {
    name: 'Вася',
};
fivethExample.name = 'Петя';
console.log(fivethExample);                 // * "Петя"

// TODO => Primer

var sixthValue = 1;
function sixthFuntion() {
  sixthValue = 2;                           // * Сначала присваивается значение 1, а затем 2
}
sixthFuntion();
console.log(sixthValue);                    // * 2



// TODO => Primer с временной мертвой зоной

// * Пример №1 
console.log(foo);                           // * undefined
var foo = 123;

// * Пример №2 
console.log(foo);                           // * Error
let foo = 123;

// * Пример №3
let age = 50;
function printAge() {
  console.log(age);
  let age = 30;
}

printAge();                                 // * Error

// * Пример №4
console.log(animal);                        // * Uncaught ReferenceError: animal is not defined

if(true) {
    console.log(animal);                    // * Uncaught ReferenceError: Cannot access  'animal' before initialization
    const animal = "Parrot"
    console.log(animal);                    // * "Parrot"
}


// ! Переменные, замыкание, область видимости.

// TODO: Уровень сложности: легко

var specialVarFirst;
console.log(specialVarFirst);             // ?
console.log(specialVarSecond);            // ?
var specialVarSecond = 1;



// TODO: Уровень сложности: легко+

function easePlusFirst() {
  console.log(counter1);                  // ?
  console.log(counter2);                  // ?
  var counter1 = 1;
  let counter2 = 2;
}
easePlusFirst();

function easePlusSecond() {
  return b;
}
easePlusSecond();
const b = 1;
easePlusSecond();

let easePlusThird = f();
const easePlusFourth = 2;
function f() {
  return c;
}

let easePlusFive = 'Alex';
const easeFunction = () => {
  return () => {
    return () => {
      return () => {
        console.log(easePlusFive);
      };
    };
  };
};
easeFunction()()()();                    // ?

function easeFunctionSecond() {
  const name = 'Alex';
  return () => {
    console.log(name);
  };
}
let name = 'Hanna';
const easeF1 = easeFunctionSecond();
easeF1();                                 // ?

function easeFunctionThird() {
  let num1 = 1;
  let num2 = 2;
  return function () {
    return num1 + num2;
  };
}
let easeF2 = easeFunctionThird();
console.log(easeF2());

function easeFunctionFouth() {
  let num1 = 1;
  let num2 = 2;
  return function () {
    return num1 + num2;
  };
}

console.log(easeFunctionFouth()());

function easeFunctionFive() {
  let num1 = 1;
  return function () {
    return num1 + easeValueFive;
  };
}
let easeValueFive = 2;
let easeF3 = easeFunctionFive();
console.log(easeF3());

// TODO: Уровень сложности: нормально

let normalLevelFirst = 10;
// Immediately Invoked Function Expression - это JS-функции, которые выполняется сразу же после объявления. Эта функция анонимна (у нее нет имени) и 
// запускается немедленно. Когда не было лексического окружение на уровне блока кода, он давал простой способ изолировать переменную внутри функции.
(function normalFunctionFirst() {
  if (normalLevelFirst === 10) {
    let normalLevelFirst = 11;
    console.log(normalLevelFirst);
  }
  console.log(normalLevelFirst);
})();



// TODO: Уровень сложности: нормально+

function normalTest1() {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  };
}

let normalValue1 = normalTest1();
normalValue1();
normalValue1();

let normalValue2 = normalTest1();
normalValue2();
normalValue2();



function normalTest2() {
    let num = 0;
  
    return function () {
      console.log(num);
      num++;
    };
}

normalTest2()();
normalTest2()();
normalTest2()();



function normalTest3() {
    let num = 0;
    return function () {
      console.log(num);
      num++;
    };
}
  
let normalValue3 = normalTest3;
normalValue3()();
normalValue3()();
normalValue3()();



// TODO: Уровень сложности: сложно (есть загвоздки)

var specialHard = 5;
function specialHardf1() {
  if (specialHard) {
    console.log(a);
    var specialHard = 10;
  }
}
specialHardf1();


function specialHardf2() {
    let counter = 0;
    return function () {
      return function () {
        console.log(counter);
        counter++;
      };
    };
}
  
let hard = specialHardf2();
let hardValueOne = hard();
let hardValueSecond = hard();
hardValueOne();
hardValueSecond();
hardValueOne();
hardValueSecond();
  

let specialValueThree = 1;
function specialHardf3() {
  return function () {
    console.log(specialValueThree);
    specialValueThree++;
  };
}
let hardValueThird = specialHardf3();
hardValueThird();
hardValueThird();
let hardValueFouth = specialHardf3();
hardValueFouth();
hardValueFouth();
