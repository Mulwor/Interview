// * Задача №1 - В каком приоритете выполняться данный код

setTimeout(() => {
  console.log("timeout")
}, 0)
Promise.resolve("value").then(console.log)
console.log("hello")

// * Answer: hello, value, timeout

// ! -----------------------------------------------------------

// * Задача №2 - Будет ли принципиальная разница между двумя кодами

function run1(number = 0) {
  setTimeout(() => {
    console.log(number)
    run1(number + 1)
  })
}
run1()

const p = Promise.resolve()
function run2(number = 0) {
  p.then(() => {
    console.log(number)
    run2(number + 1)
  })
}
run2()

// ! -----------------------------------------------------------

function map<T, R>(arr: T[], func: R): {}
map([], v => v+2)



