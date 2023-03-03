/* 
    * Темы: 
    ! Variables: let, var, const


*/
var number  = 10; 
console.log(number);        // 10
number = 22; 
console.log(number);        // 20


var weight = 10;
if (weight > 8) {
    // У варов нет блочной области видимости он переходит в глобальную область видимости. 
    var kilograms = `Вес ${weight} кг`;
    console.log(kilograms);
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

// TODO => Primer

const fivethExample = {
    name: 'Вася',
};
fivethExample.name = 'Петя';
console.log(fivethExample);                 // * "Петя"

// TODO => Primer

var sixthValue = 1;
function sixthFuntion() {
  sixthValue = 2;
}
sixthFuntion();
console.log(sixthValue);                    // * 2