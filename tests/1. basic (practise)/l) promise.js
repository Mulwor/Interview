// Todo: Promise

// ! Promise - один из способов работы с ассинхронным кодом.
// ! Промис создается в виде специального объекта через new. Внутри него
// ! есть resolve (если удачно выполнилось) и reject (если неудачно выполниться).
// ! У промиса есть методы: then (успешно), catch (поймать ошибку), метод сработает в любом случае
// ! Cтоит отметить, что если добавить throw new Error(), то он сразу вернет ошибку, однако если до
// ! него были then с успешными то сначала они пройдут а затем вернет ошибку и дальше не пойдет


// Todo: №1
let firstExample = new Promise(function (resolve, reject) {
  setTimeout(() => resolve((a = 99), 300))
})
firstExample.then((value) => console.log(value)) 

function e(num) {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(num * num))
    }, 3500)
  }
  
  e(5).then((res) => console.log(res))

let firstExampleWithIncomingData = (number) = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(num * num), 2000)
}
firstExampleWithIncomingData(5).then((response) => console.log(response))
  



// Todo: №2
let firstExampleWithError = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("error in promise")), 1500)
})
firstExampleWithError.catch((error) => console.log(error))


let secondExampleWithError = new Promise(function (resolve, reject) {
  throw newError("Проверить что выведится")
})
secondExampleWithError.then((value) => console.log(value)) 



// Todo: №3
let thirdExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    true ? resolve("promise completed"): reject()
  }, 1000)
})
thirdExample.then((data) => console.log(data))
thirdExample.catch(() => console.log(error))
thirdExample.finally(() => console.log("Finally"))



// Todo: №4 => Пример с фетч, которы помогает осуществлять запросы к серверу, а также имеют упрощенный интерфейс и построен на промисах
function fourthExample() {
  return new Promise((resolve) => resolve("some date"))
}
fourthExample()
  .then((result) => `${result} and one`)
  .then((result) => `${result} and two`)
  .then((result) => new Error(`${result} has error`))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {})



// Todo: №5 
let fivethExample = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = true
    (!isError) ? resolve([1, 2, 3, 4, 5]) : reject("error in promise")
  }, 3000)
})
setTimeout(() => console.log(d), 1000)


let fivethExample_2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = false
    (!isError) ? resolve([1, 2, 3, 4, 5]) : reject("error in promise")
  }, 1000)
})
ba.then((result) => console.log(result))







// ----------- Пример №4 ----------------
let de = [
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2500)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]
// Promise.race дождемся окончания загрузки первого из промисов
Promise.race(de).then((res) => console.log(res)) // [1]
// Promise.all - дожидается окончания всех промисов из нашего массива
Promise.all(de).then((res) => console.log(res)) // [1, 2, 3]

// ----------- Пример №5 ----------------
function e(num) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(num * num))
  }, 3500)
}

e(5).then((res) => console.log(res))

// ----------- Пример №6 ----------------
function f(num) {
  if (num > 0) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(num * num)
      }, 4000)
    })
  } else if (num === 0) {
    return Promise.resolve(0) // возвращаем промис, а не число
  } else {
    // Promise.reject - делает исключение для тех числе, которые меньше нуля
    return Promise.reject("incorrect number")
  }
}
f(0).then((res) => console.log(res))
f(1).then((res) => console.log(res))
f(2).then((res) => console.log(res))
//f(-1).then(res => console.log(res))

// ----------- Пример №1 ----------------
let a = new Promise(function (resolve) {
  resolve(1)
  setTimeout(() => resolve(2), 1000)
})

a.then(console.log)
// Вывод будет: 1.
// Второй вызов resolve будет проигнорирован, поскольку учитывается
// только первый вызов reject/resolve. Все последующие вызовы –
// игнорируются.

// ----------- Пример №2 ----------------
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms))
}
delay(1500).then(() => console.log("через 1,5 секунды"))

// ----------- Пример №3 (Цепочка промисов)----------------
const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{ title: "Monday" }])
  }, 1000)
})

b.then((data) => {
  return 10
})
  .then((ten) => {
    console.log("2", ten)
    return 2
  })
  .then((one) => {
    console.log("3", one)
  })

// ----------- Пример №4 (Catch может ловить ошибки вышестоящий)----------------
const c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{ title: "Monday" }])
  }, 1000)
})

c.finally(() => {
  console.log("Fin")
  throw new Error("Test error")
})
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
    return 10
  })

// ----------- Пример №5 (Не является цепочкой)----------------
const promise101 = new Promise((res, rej) => {
  res()
})
promise101.then()
promise101.then()
promise101.catch()

// !ToDo: Promise.all(), Promise.any() и Promise.race()
// Пример №1
let promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]
// Дождемся окончания загрузки всех промисов
Promise.all(promises).then((res) => console.log(res))
// Дождемся окончания первого из промисов
Promise.race(promises).then((res) => console.log(res))
// Если хотя бы один из промисов в массиве будет отклонен, то промис с результатом сразу же перейдет в состояние rejected.
Promise.all(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

// Пример №2
const promise1 = Promise.reject(0)
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"))
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"))
const promise4 = [promise1, promise2, promise3]

Promise.any(promise4).then((value) => console.log(value)) // expected output: "quick"

// Пример №3
const slow = new Promise((resolve) => setTimeout(() => resolve(1), 6000))
const fast = new Promise((resolve) => setTimeout(() => resolve(2), 3000))
const theFastest = new Promise((resolve) => setTimeout(() => resolve(3), 1000))
Promise.race([slow, fast, theFastest]).then((value) => {
  console.log(value) // 3
})

// Пример №4
const slow1 = new Promise((resolve) => setTimeout(() => resolve(1), 6000))
const fast1 = new Promise((resolve) => setTimeout(() => resolve(2), 3000))
const theFastest1 = new Promise((resolve, reject) => setTimeout(() => reject("Some error"), 1000))
Promise.race([slow, fast, theFastest])
  .then((value) => {
    console.log(value) // эта часть будет проигнорирована, так как быстрее всех завершился промис с ошибкой
  })
  .catch((error) => {
    console.log(error) // 'Some error'
  })

// Пример №5
const slow2 = new Promise((resolve) => setTimeout(() => resolve(1), 6000))
const fast2 = new Promise((resolve) => setTimeout(() => resolve(2), 3000))
const theFastest2 = new Promise((resolve, reject) => setTimeout(() => reject("Some error"), 1000))
Promise.any([slow2, fast2, theFastest2])
  .then((value) => {
    console.log(value) // 2
  })
  .catch((error) => {
    console.log(error) // в эту часть кода мы не попадём
  })

// Пример №6
const promise6 = Promise.resolve(3)
const promise7 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"))
const promise8 = [promise1, promise2]

Promise.allSettled(promise8).then((results) =>
  results.forEach((result) => console.log(result.status)),
)

// expected output:
// "fulfilled"
// "rejected"

// Пример №7 :

const promises9 = [
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]

Promise.allSettled(promises).then(([response1, response2, response3]) => {
  console.log(response1) // { status: 'fulfilled', value: 3 }
  console.log(response2) // { status: 'rejected', reason: 'error' }
  console.log(response3) // { status: 'fulfilled', value: 1
})

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one")
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two")
})
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three")
})
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four")
})
var p5 = new Promise((resolve, reject) => {
  reject("reject")
})

Promise.all([p1, p2, p3, p4, p5]).then(
  (value) => {
    console.log(value)
  },
  (reason) => {
    console.log(reason)
  },
)
