// ! Именования переменных и функций

var number  = 10; 
console.log(number);        // 10
number = 22; 
console.log(number);        // 20


var weight = 10;
if (weight > 8) {
    var kilograms = `Вес ${weight} кг`;
    console.log(kilograms);
}

// ! Разница между var, let, const

var number  = 10; 
console.log(number);        // 10
number = 22; 
console.log(number);        // 20


var weight = 10;
if (weight > 8) {
    // У варов нет блочной области видимости он переходит в глобальную область видимости. 
    var kilograms = `Вес ${weight} кг`;
    console.log(kilograms);
}

// ! Как передаются параметры в функцию по ссылке по значению 

// * Передача по значению (пример №1)

let n = 10;
console.log("n before change:", n);     // n before change: 10

function change(x){
    x = 2 * x;
    console.log("x in change:", x);
}

change(n);                              // x in change: 20
console.log("n after change:", n);      // n after change: 10



// * Передача по ссылке (пример №2)
let bob = { 
    name: "Bob"
};

console.log("before change:", bob.name);    // Bob

function change(user){
    user.name = "Tom";
}
change(bob);
console.log("after change:", bob.name);     // Tom



// * Передача и по ссылке и по значению (пример №3)
function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed"
    c = {
        item: "changed"
    }
}

let num = 10; 
let obj1 = { item: "unchanged" };
let obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num);                            // 10
console.log(obj1.item);                      // "changed"
console.log(obj2.item);                      // "unchanged"