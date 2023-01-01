


// 9.
function test4() {
  let num3 = 1;
  return function () {
    return num3;
  };
}

let num3 = 2;
let func = test4();
console.log(func());

//TODO: Function declaration and funcxion expression-->
// 10.
declaraionPlus(); // ???
function declaraionPlus() {
  console.log('!');
}

// 11.
expressionMinus(); // ???
let expressionMinus = function () {
  console.log('!');
};

// 12.
let hi = 'Hello';
function sayHello(greeting) {
  console.log(greeting + ' ' + hi);
}
sayHello('Alex'); // ???

// 13.
let hiTwo = 'Hello';
function sayHelloAnother(greeting) {
  function foo() {
    let age = 23;
    console.log(`${hiTwo} ${greeting}, my age is ${age}`);
  }
  foo();
}
sayHelloAnother('Alex');

// 14.
function makeCounter() {
  let count = 0;
  return () => {
    console.log(++count);
  };
}
let counter14 = makeCounter();
counter14();
counter14();
counter14();

// 15.
let count = 0;
function makeCounterEnough() {
  return () => console.log(++count);
}
let counterSecond = makeCounterEnough();
let counterThird = makeCounterEnough();
counterSecond();
counterSecond();
counterThird();
counterThird();

// 16.
function test() {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  };
}

test()();
test()();

// 17.
let num01 = 1;
function test1() {
  return function () {
    console.log(num01);
    num01++;
  };
}
let func01 = test1();
func01();
func01();
let func02 = test1();
func02();
func02();

// 18.
let counter = 0;

function test2() {
  return function () {
    console.log(counter);
    counter++;
  };
}

let func18 = test2;

let func19 = func();
let func20 = func();
func19();
func20();
func19();
func20();

// 19.
function test3() {
  let counter = 0;
  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
}

let func7 = test3()();

let func5 = func7;
let func6 = func7;
func5();
func6();
func5();
func6();

