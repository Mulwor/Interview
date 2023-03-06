/* 
    * Темы
    ! 1. Разница между function declaration и function expression
    ! 2. IIFE

*/

// ! Разница между function declaration и function expression
sayHi("Вася");                   // Привет, Вася

function sayHi(name) {
  alert( "Привет, " + name );
}

sayHi("Вася");                   // ошибка!

let sayHi = function(name) {
  alert( "Привет, " + name );
}

// ! IIFE
(function() {
    console.log("Hi there!")
})();


var result = (function () {
    var name = "Barry";
    return name;
})();
result;                         // * "Barry" 