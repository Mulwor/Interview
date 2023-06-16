//! Все взято из: https://my-js.org/docs/other/js-questions

// * Вопрос №1
function sayHi() {
  console.log(name)          // * undefined
  console.log(age)           // * Reference error (Ошибка)
  var name = "John"
  let age = 30
}

sayHi()

// ===========================

// * Вопрос №2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)     //* 3, 3, 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)     //* 0, 1, 2
}

// ===========================

// * Вопрос №3
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius,
}

console.log(shape.diameter())   // ? 10 * 2 = 20
console.log(shape.perimeter())  // ? У стрелочных функций нету this 


// ===========================

// * Вопрос №4

console.log(+true)            // ? 1
console.log(!"John")          // ? false (! меняет на противоположное значение)


// ===========================


// * Вопрос №5

let c = { 
  greeting: "Hey!" 
}
let d
d = c
c.greeting = "Hello!"
console.log(d.greeting)    // Hello, передаются данные по ссылке если меняется основная, то меняются и копии


// ===========================

// * Вопрос №6

let a = 3
let b = new Number(3)      // * Встроенная функция конструктор, которая выглядит как объект
let c = 3

console.log(a == b)        // true
console.log(a === b)       // false
console.log(b === c)       // false

// ===========================


// ! Вопрос №7 (Доделать)

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: "pink" })
freddie.colorChange("orange")

// ===========================

// * Вопрос №8 (нестрогий режим)
let greeting
greeting = {} 
console.log(greeting)

// ===========================

// * Вопрос № 9

function bark() {
  console.log("Woof!")
}
bark.animal = "dog"

console.log(bark.animal)        // ? Так как функция - это подобъект, то запишется значения dog


// ? ===========================
// ! Вопрос № 10 (Доделать)

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const person = new Person("John", "Smith")

Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(person.getFullName())


// ? ===========================
// ! Вопрос № 11 (Доделать)

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const john = new Person("John", "Smith")
const jane = Person("Jane", "Air")

console.log(john)
console.log(jane)


// ? ===========================
// * Вопрос № 12

function sum(a, b) {
  return a + b
}

console.log(sum(1, "2"))     // ? 12



// ? ===========================
// * Вопрос № 13

let number = 0
console.log(number++)     // 0
console.log(++number)     // 2
console.log(number)       // 2



// ? ===========================
// * Вопрос № 14

function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person1 = "John"
const age = 30

getPersonInfo`${person1} is ${age} years old`

// ? При использовании тегированных шаблонных литералов
// ? первым значением, возвращаемым функцией, является массив строк.
// ? Прочими значениями являются значения, переданные функции в качестве аргументов.



// ? ===========================
// * Вопрос № 15


function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Ты взрослый!")
  } else if (data == { age: 18 }) {
    console.log("Ты по-прежнему взрослый.")
  } else {
    console.log("Хм... У тебя что, нет возраста?")
  }
}

checkAge({ age: 18 }) // False

// ? Сравниваются объекты - по ссылкам, а они всегда разные


// ? =============================
// * Вопрос № 16

function getAge(...args) {
  console.log(typeof args)      // * Возвращает массив [...args]
}

getAge(30)


// ? =============================
// * Вопрос № 17
function getAge() {
  "use strict"
  age = 30
  console.log(age)
}

getAge()