// Callback, memoisation

// Пример №0
let function1 = () => console.log("I'm the function1 result");
let function2 = function(callback){
    console.log("I'm the function2 result");
    callback();
}
function2(function1);


// Пример №1 
const foo = function () {
    return 'Hello, world!';
}
const runIt = function (fn) {
    return fn();  // Вызываем функцию, переданную в качестве параметра
}
console.log(runIt(foo)); // Hello, world


// Пример №2
const makePizza = function (title, callback) {
    console.log(`Заказ пиццы: «${title}». Начинаем готовить…`); 
    setTimeout(callback, 3000);
}
const readBook = () => console.log('Читаю книгу «Колдун и кристалл»…');
const eatPizza = () => console.log('Ура! Пицца готова.');
   
makePizza('Пеперонни', eatPizza);
readBook();


// Пример №3
function square(num) {
	return num * num;
}

let result1 = each([1, 2, 3, 4, 5], square);
console.log(result1);


// Пример №4
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
	return result;
}

let result2 = each([1, 2, 3, 4, 5], function(num) {
	return num ** 3;
});

console.log(result2);

// Eventloop
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);


// 1, 7, 3, 5, 2, 6, 4




// Eventoop - 2
console.log(1);  
setTimeout(() => console.log(2)); 
Promise.reject(3).catch(console.log); 
// Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически.
new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
Promise.resolve(5).then(console.log); 
console.log(6);  
setTimeout(() => console.log(7),0) 

// 1, 6, 3, 5, 2, 4, 7


// Eventloop - 3
const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
setTimeout(() => console.log('in setTimeout1'), 1000);  
myPromise(1000).then(res => console.log('in Promise 1'));
setTimeout(() => console.log('in setTimeout2'), 100);    
myPromise(2000).then(res => console.log('in Promise 2')); 
setTimeout(() => console.log('in setTimeout3'), 2000);
myPromise(1000).then(res => console.log('in Promise 3'));
setTimeout(() => console.log('in setTimeout4'), 1000);  
myPromise(5000).then(res => console.log('in Promise '));

// in setTimeout2; in setTimeout1; in Promise 1; in Promise 3
// in setTimeout4; in Promise 2; in setTimeOut3; in Promise


(function () {
    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('this is a msg from call back');
    });
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('this is a msg from call back1');
    }, 0);
  
    console.log('this is the end');
})();
  
  // "this is the start"
  // "this is just a message"
  // "this is the end"
  // "this is a msg from call back"
  // "this is a msg from call back1"