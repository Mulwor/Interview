// * Пример №1
const memoize = (fn) => {
  const cache = {}
  return function (param) {
    if (cache[param]) {
      return cache[param]
    } else {
      const result = fn(param)
      cache[param] = result
      return result
    }
  }
}

const toUpper = (str = "") => str.toUpperCase()
const toMemo = memoize(toUooer)
toUpperMemoize("Yauhem")
toUpperMemoize("Yauhem")



// * Пример №2
const va = (n) => n + 10
console.log("Simple call", va(3))
// простая функция, принимающая другую функцию и
// возвращающая её же, но с мемоизацией
const dd = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0] // тут работаем с единственным аргументом
    if (n in cache) {
      console.log("Fetching from cache")
      return cache[n]
    } else {
      console.log("Calculating result")
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}
// создание функции с мемоизацией из чистой функции 'va'
const dddva = dd(va)
console.log(dddva(3)) // вычислено
console.log(dddva(3)) // взято из кэша
console.log(dddva(4)) // вычислено
console.log(dddva(4)) // взято из кэша
