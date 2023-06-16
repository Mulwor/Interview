//! Задача №

function sayHi() {
  console.log(name)
  console.log(age)
  var name = "John"
  let age = 30
}

sayHi()

//! Задача №

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

// ! Задача №
console.log(+true)
console.log(!"John")


// ! Задача №
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)


// ! Задача №
// обратите внимание: код выполняется в нестрогом режиме
let greeting
greeting = {} // опечатка!
console.log(greetign)



// ! Задача №
let number = 0
console.log(number++)
console.log(++number)
console.log(number)


// ! Задача №
function getAge() {
  "use strict"
  age = 30
  console.log(age)
}
getAge()