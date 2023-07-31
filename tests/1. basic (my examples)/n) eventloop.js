// ToDo №1
console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => setTimeout(() => console.log(4)))
Promise.resolve().then(() => console.log(5))
setTimeout(() => console.log(6))
console.log(7)
// * [1, 7, 3, 5, 2, 6, 4]



// ToDo №2
(function () {
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



// ToDo №2
console.log(1)
setTimeout(() => console.log(2))
Promise.reject(3).catch(console.log)
// * Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически.
new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4))
Promise.resolve(5).then(console.log)
console.log(6)
setTimeout(() => console.log(7), 0)
// * [1, 6, 3, 5, 2, 4, 7]
 


// ToDo №3 (Приоритетность в секундах у сеттаймаута)
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
// * [in setTimeout2, in Promise 1, in Promise 3, in setTimeout1, in setTimeout4, in Promise 2, in setTimeout3, in Promise"]