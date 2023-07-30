// ! Promise – это специальный объект, который содержит своё состояние.
// ! Работает промис так - принимает в себя функцию, которая можно сказать
// ! Вызывается сразу

class MyPromise {}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 1_000)
})
  .then((value) => {
    console.log("value:", value)
  })
  .catch((error) => {
    console.error("value:", error)
  })
