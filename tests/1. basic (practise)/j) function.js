// ! Разница между function declaration и function expression
sayHi("Вася") // Привет, Вася
function sayHi(name) {
  alert("Привет, " + name)
}

sayHi("Вася") // ошибка!

let sayHi = function (name) {
  alert("Привет, " + name)
}



// ! Как передаются параметры в функцию по ссылке по значению
// Todo => #1
let n = 10
console.log("n before change:", n) // ? n before change: 10

// Todo => #2
function change(x) {
  x = 2 * x
  console.log("x in change:", x)
}
change(n) // ? x in change: 20
console.log("n after change:", n) // ? n after change: 10

// Todo => #3
let bob = {
  name: "Bob",
}
console.log("before change:", bob.name) // ? Bob

// Todo => #4
function change(user) {
  user.name = "Tom"
}
change(bob)
console.log("after change:", bob.name) // Tom

// Todo => #5
function changeStuff(a, b, c) {
  a = a * 10
  b.item = "changed"
  c = {
    item: "changed",
  }
}
let num = 10
let obj1 = { item: "unchanged" }
let obj2 = { item: "unchanged" }
changeStuff(num, obj1, obj2)
console.log(num) // ? 10
console.log(obj1.item) // ? "changed"




// ! Разница между обычными функциями и стрелочными
// * 1. Синтаксис
function greet(who) {
  return `Hello, ${who}!`
}

let sum = (a, b) => a + b;


// * 2. У стрелочных функций нет своево this.

const checkAllFunction = {
  name: "Oleg",
  surname: "Stanislavovich",
  chechOrdinaryFunction: function() {
    return this
  },
  getFullWithOrdinary: function() {
    return this.name, this.surname
  },
  checkArrow: getArrow = () => {
    return this
  },
}

console.log(checkAllFunction.getFullWithOrdinary())           // ? Object checkAllFunction
console.log(checkAllFunction.chechOrdinaryFunction())         // ? Oleg Stanislavovich
console.log(checkAllFunction.checkArrow())                    // ? Window

// TODO => #2
function add(c, d) {
  return this.a + this.b + c + d
}

var object = { a: 1, b: 3 }

add.call(object, 5, 7) // 16 (1+3+5+7)
add.apply(object, [10, 20]) // 34 (1+30+10+20)


// * Работа с контекстом: call, apply, bind
// TODO => #1
let user = {
  firstName: "Вася",
}
function func() {
  сonsole.log(this.firstName)
}
let funcUser = func.bind(user)
funcUser()                                                      // ? Вася



// TODO => #2
function add(c, d) {
  return this.a + this.b + c + d
}
var object = { a: 1, b: 3 }
add.call(object, 5, 7)                                        // ? 16 (1+3+5+7)
add.apply(object, [10, 20])                                   // ? 34 (1+30+10+20)


// TODO => #2
const person = {
  surname: "Старк",
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
  },
}
const john = {
  surname: "Сноу",
}

person.knows("все", "Бран") // Ты все знаешь, Бран Старк

person.knows.call(john, "ничего не", "Джон") // Ты ничего не знаешь, Джон Сноу
person.knows.apply(john, ["ничего не", "Джон"]) // Ты ничего не знаешь, Джон Сноу
person.knows.call(john, ...["ничего не", "Джон"]) // Ты ничего не знаешь, Джон Сноу

const bound = person.knows.bind(john, "ничего не", "Джон")
bound()


// ! Чистая функция
function calculateGST(productPrice) {
  return productPrice * 0.05
}
const add = (x, y) => x + y
add(4, 4)


// ! Нечистая функцияя
let tax = 20
function calculateGST(productPrice) {
  return productPrice * (tax / 100) + productPrice
}
tax = 24
// * Зависит от внешней переменной и при передаче одного и того же аргумента поттенциально
// * может возвращать разные результаты.
