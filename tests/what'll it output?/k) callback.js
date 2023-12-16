// ! Пример №0
let function1 = () => console.log("I'm the function1 result")
let function2 = function (callback) {
  console.log("I'm the function2 result")
  callback()
}
function2(function1)

// ! Пример №1
const foo = function () {
  return "Hello, world!"
}

const runIt = function (fn) {
  return fn() // Вызываем функцию, переданную в качестве параметра
}
console.log(runIt(foo)) // Hello, world

// ! Пример №2
const makePizza = function (title, callback) {
  console.log(`Заказ пиццы: «${title}». Начинаем готовить…`)
  setTimeout(callback, 3000)
}
const readBook = () => console.log("Читаю книгу «Колдун и кристалл»…")
const eatPizza = () => console.log("Ура! Пицца готова.")

makePizza("Пеперонни", eatPizza)
readBook()

// ! Пример №3
function square(num) {
  return num * num
}

let result1 = each([1, 2, 3, 4, 5], square)
console.log(result1)

// ! Пример №4
function each(arr, callback) {
  let result = []
  for (let elem of arr) {
    result.push(callback(elem))
  }
  return result
}

let result2 = each([1, 2, 3, 4, 5], function (num) {
  return num ** 3
})

console.log(result2)

// ! Пример №5
function doHomework(subject, alertFinished) {
  alert(`Starting my ${subject} homework.`)
  alertFinished()
}

function alertFinished() {
  alert("Finished my homework")
}

doHomework("math", alertFinished)
