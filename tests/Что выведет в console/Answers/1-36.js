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



// ! Day 2

// ? =============================
// * Вопрос № 18 (Метод eval() выполняет JavaScript-код, представленный строкой.)

const sum = eval("10*10+5")
console.log(sum)                   // * 105

// ? =============================
// * Вопрос № 19

var num = 8
var num = 10

console.log(num)                  // * 10


// ? =============================
// * Вопрос № 20 (Ключи тоже могут быть строками вне зависимости как мы напишем)

const obj = { 
  1: "a", 
  2: "b", 
  3: "c" 
}
const set = new Set([1, 2, 3, 4, 5])

console.log(obj.hasOwnProperty("1"))
console.log(obj.hasOwnProperty(1))
console.log(set.has("1"))
console.log(set.has(1))


// ? =============================
// * Вопрос № 21

const obj1 = { 
  a: "one", 
  b: "two", 
  a: "three" 
}

console.log(obj1)

// * Если в объекте имеется два ключа с одинаковыми именами,
// * то первый ключ перезаписывается. Его позиция сохраняется
// * а значением становится последнее из присвоенных.


// ? =============================
// * Вопрос № 22

for (let i = 1; i < 5; i++) {
  // 1, 2 ... 4
  if (i === 3) continue
  console.log(i)
}

// * Оператор continue пропускает текущую итерацию (цикл).
// * если условие удовлетворяется (является истинным).


// ? =============================
// ! Вопрос № 23

String.prototype.giveMePizza = () => {
  return "Give me pizza!"
}

const name = "John"

console.log(name.giveMePizza())


// ? =============================
// * Вопрос № 24

const a1 = {}
const b1 = { key: "b" }
const c1 = { key: "c" }

a1[b1] = 123
a1[c1] = 456

console.log(a1[b1])

// ? =============================
// * Вопрос № 25

const foo = () => console.log("first")
const bar = () => setTimeout(() => console.log("second"))
const baz = () => console.log("third")

bar()
foo()
baz()


// ? =============================
// * Вопрос № 26

```
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Нажми меня!
  </p>
</div>
```

// ? =============================
// ! Вопрос № 27 (Call, apply, bind)

const person2 = { 
  name: "John" 
}

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person2, 30)
sayHi.bind(person2, 30)


// ? =============================
// * Вопрос № 28

function sayHi() {
  return (() => 0)()
}

console.log(typeof sayHi())         // * Number


// ? =============================
// * Вопрос № 29

console.log(typeof typeof 1)         //* String

// ? =============================
// * Вопрос № 30

const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)                  // * [1, 2, 3, 7 x empty, 11]

// ? =============================
// * Вопрос № 31 (!try, catch - не блок)

(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()                       // 1 undefined 2 

// ? =============================
// * Вопрос № 32

const result = [[0, 1], [2, 3]].reduce((acc, cur) => {
  return acc.concat(cur)    // 1 2 0 1 2 3
}, [1, 2])

console.log(result)

// ? =============================
// * Вопрос № 33

console.log(!!null)        // False
console.log(!!"")          // False
console.log(!!1)           // true



// ? =============================
// * Вопрос № 34

console.log([..."John"])      // ["J", "o", "h", "n"]

// ? =============================
// ! Вопрос № 35

function* generator(i) {
  yield i
  yield i * 2
}

const gen = generator(10)

console.log(gen.next().value)       // 10
console.log(gen.next().value)       // 20


// ? =============================
// * Вопрос № 36

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one")
})

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two")
})

// * Возвращает первый выполненный или отклоненный промис

Promise.race([firstPromise, secondPromise]).then(res => console.log(res))


