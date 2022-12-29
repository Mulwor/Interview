// Всего в JS 8 типов данных: number, string, boolean, null, undefined, symbol, bigint и object
console.log(true + false)
console.log(12 / 4)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log([1] > null)
console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
console.log(["x"] == "x")
console.log([] + null + 1)
console.log(0 || "0" && {})
console.log([1,2,3] == [1,2,3])
console.log({}+[]+{}+[1])
console.log(!+[]+[]+![])
console.log(new Date(0) - 0)
console.log(new Date(0) + 0)





Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true



// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", '', ``
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof NaN)

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }

// '', 0, null, undefined, NaN, false
// console.log(Boolean(''))
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function(){}))

// Строки и числа
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0)
// console.log('' - 1 + 0)
// console.log('3' * '8') // number
// console.log(4 + 10 + 'px')
// console.log('px' + 5 + 10) // string
// console.log('42' - 40)
// console.log('42px' - 2)
// console.log(null + 2)
// console.log(undefined + 42)

// == vs ===
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)
// console.log('0' == false)
// console.log('0' == 0)
// console.log(0 == 0)

// =====
// console.log(false == '')
// console.log(false == [])
// console.log(false == {})
// console.log('' == 0)
// console.log('' == [])
// console.log('' == {})
// console.log(0 == [])
// console.log(0 == {})
// console.log(0 == null)