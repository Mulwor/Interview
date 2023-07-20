// ! Задачи

// Eventloop
console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => setTimeout(() => console.log(4)))
Promise.resolve().then(() => console.log(5))
setTimeout(() => console.log(6))
console.log(7)
// 1, 7, 3, 5, 2, 6, 4

// Eventoop - 2
console.log(1)
setTimeout(() => console.log(2))
Promise.reject(3).catch(console.log)
// Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически.
new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4))
Promise.resolve(5).then(console.log)
console.log(6)
setTimeout(() => console.log(7), 0)

// 1, 6, 3, 5, 2, 4, 7

// Eventloop - 3
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay)
  })
setTimeout(() => console.log("in setTimeout1"), 1000)
myPromise(1000).then((res) => console.log("in Promise 1"))
setTimeout(() => console.log("in setTimeout2"), 100)
myPromise(2000).then((res) => console.log("in Promise 2"))
setTimeout(() => console.log("in setTimeout3"), 2000)
myPromise(1000).then((res) => console.log("in Promise 3"))
setTimeout(() => console.log("in setTimeout4"), 1000)
myPromise(5000).then((res) => console.log("in Promise "))

// in setTimeout2; in setTimeout1; in Promise 1; in Promise 3
// in setTimeout4; in Promise 2; in setTimeOut3; in Promise

;(function () {
  console.log("this is the start")

  setTimeout(function cb() {
    console.log("this is a msg from call back")
  })

  console.log("this is just a message")

  setTimeout(function cb1() {
    console.log("this is a msg from call back1")
  }, 0)

  console.log("this is the end")
})()

// "this is the start"
// "this is just a message"
// "this is the end"
// "this is a msg from call back"
// "this is a msg from call back1"

function createCounter() {
  let count = 0

  function increment() {
    count++
  }

  function decrement() {
    count--
  }

  return { count, increment, decrement }
}

const result = createCounter()

result.increment()
result.increment()

console.log(result.count)



const createId = () => {
  let id = 0
  return () => id++
}

const getId = createId()
console.log(getId())
console.log(getId())
console.log(getId())
