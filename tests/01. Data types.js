// null, undefined, boolean, number, string, object, symbol
console.log("---- Простая проверка----")

console.log(typeof 0)                        // number
console.log(typeof true)                     // boolean
console.log(typeof 'Javascript')             // string
console.log(typeof undefined)                // undefined
console.log(typeof Math)                     // object
console.log(typeof Symbol('JS'))             // symbol
console.log(typeof null)                     // object
console.log(typeof function() {})            // function
console.log(typeof NaN)                      // number
console.log(typeof typeof 100)               // string


console.log("---- Явное приведение типов, а также thruthy/fasly----")

console.log(Boolean(''))                    // false
console.log(Boolean('Hello'))               // true
console.log(Boolean(' '))                   // true
console.log(Boolean('0'))                   // true
console.log(Boolean(0))                     // false
console.log(Boolean(1))                     // true
console.log(Boolean(null))                  // false
console.log(Boolean(undefined))             // false
console.log(Boolean(false))                 // false
console.log(Boolean([]))                    // true
console.log(Boolean({}))                    // true
console.log(Boolean(Symbol()))              // true
console.log(Boolean(function(){}))          // true

console.log(Number(" 123 "))                // 123
console.log(Number("123z"))                 // NaN
console.log(Number(true))                   // 1
console.log(Number(false))                  // 0
console.log(Number("\n"))

console.log(String(123))                    // '123'
console.log(String(-12.3))                  // '-12.3'
console.log(String(null))                   // 'null'
console.log(String(undefined))              // 'undefined'


console.log(' ---- Строгое равенство и нестрогое равенство -----')

console.log(2 == '2')               // true
console.log(2 === '2')              // false
console.log(undefined == null)      // true
console.log(undefined === null)     // false
console.log('0' == false)           // true
console.log('0' == 0)               // true
console.log(0 == 0)                 // true
console.log(null == 0)              // false

console.log(false == '')            // true
console.log(false == {})            // false
console.log('' == 0)                // true
console.log('' == {})               // false
console.log(0 == {})                // false
console.log(0 == null)              // false

console.log(false == [])            // true
console.log(0 == [])                // true
console.log(0 == [0])               // true
console.log('' == [])               // true



// Счет
console.log('----- Счет --------')
console.log(1 + '2')                    // 12 
console.log('' + 1 + 0)                 // 10
console.log('' - 1)                     // -1
console.log('' - 1 + 0)                 // -1
console.log('3' * '8')                  // 24
console.log(4 + 10 + 'px')              // 14px
console.log('px' + 5 + 10)              // px510
console.log('42' - 40)                  // 2
console.log('42px' - 2)                 // NaN
console.log(null + 2)                   // 2
console.log(undefined + 42)             // NaN


console.log(true + false)           // 1 + 0 => 1
console.log(12 / 4)                 // 3
console.log(12 / "6")               // 2
console.log("number" + 15 + 3)      // number153
console.log(15 + 3 + "number")      // 18number
console.log([1] > null)             // true
console.log("foo" + + "bar")        // fooNaN
console.log('true' == true)         // false
console.log(false == 'false')       // false
console.log(null == '')             // false
console.log(!!"false" == !!"true")  // true 


console.log(["x"] == "x")           // true
console.log([] + null + 1)          // [null1]
console.log([1,2,3] == [1,2,3])     // false
console.log({} + [])                // [object Object
console.log({}+[]+{}+[1])           // [object Object][object Object]1
console.log(new Date(0) - 0)        // 0
console.log(new Date(0) + 0)        // Сейчас время






console.log('------ Логические операторы -------')
console.log(0 || "0" && {})         // {}
console.log(!+[])                   // true
console.log([]+![])                 // false
console.log(!+[]+[]+![])            // truefalse