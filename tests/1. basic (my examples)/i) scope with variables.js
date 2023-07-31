// Todo 
function easePlusSecond() {
  return b;
}
easePlusSecond();
const b = 1;
easePlusSecond();


// Todo 
let easePlusThird = f();
const easePlusFourth = 2;
function f() {
  return c;
}


// Todo 
let easePlusFive = 'Alex';
const easeFunction = () => {
  return () => {
    return () => {
      return () => {
        console.log(easePlusFive);
      };
    };
  };
};
easeFunction()()()();                    // ?


// Todo 
function easeFunctionSecond() {
  const name = 'Alex';
  return () => {
    console.log(name);
  };
}
let name = 'Hanna';
const easeF1 = easeFunctionSecond();
easeF1();                                 // ?


// Todo 
function easeFunctionThird() {
  let num1 = 1;
  let num2 = 2;
  return function () {
    return num1 + num2;
  };
}
let easeF2 = easeFunctionThird();
console.log(easeF2());
console.log(easeFunctionFouth()());


// Todo 
function easeFunctionFive() {
  let num1 = 1;
  return function () {
    return num1 + easeValueFive;
  };
}
let easeValueFive = 2;
let easeF3 = easeFunctionFive();
console.log(easeF3());


// TODO => ! IIFE
(function() {
  console.log("Hi there!")
})();

// TODO
var result = (function () {
  var name = "Barry";
  return name;
})();
result;                                         // * "Barry" 

// TODO
let normalLevelFirst = 10;
(function normalFunctionFirst() {
  if (normalLevelFirst === 10) {
    let normalLevelFirst = 11;
    console.log(normalLevelFirst);
  }
  console.log(normalLevelFirst);
})();



// TODO
function normalTest1() {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  };
}
let normalValue1 = normalTest1();
normalValue1();
normalValue1();
let normalValue2 = normalTest1();
normalValue2();
normalValue2();


// TODO
function normalTest2() {
  let num = 0;
  return function () {
    console.log(num);
    num++;
  };
}
normalTest2()();
normalTest2()();
normalTest2()();


// TODO
function normalTest3() {
  let num = 0;
  return function () {
    console.log(num);
    num++;
  };
}
let normalValue3 = normalTest3;
normalValue3()();
normalValue3()();
normalValue3()();



// TODO
var specialHard = 5;
function specialHardf1() {
  if (specialHard) {
    console.log(a);
    var specialHard = 10;
  }
}
specialHardf1();


// TODO
function specialHardf2() {
    let counter = 0;
    return function () {
      return function () {
        console.log(counter);
        counter++;
      };
    };
}
  
let hard = specialHardf2();
let hardValueOne = hard();
let hardValueSecond = hard();
hardValueOne();
hardValueSecond();
hardValueOne();
hardValueSecond();
  

// TODO
let specialValueThree = 1;
function specialHardf3() {
  return function () {
    console.log(specialValueThree);
    specialValueThree++;
  };
}
let hardValueThird = specialHardf3();
hardValueThird();
hardValueThird();
let hardValueFouth = specialHardf3();
hardValueFouth();
hardValueFouth();


// TODO
function createCounter() {
  let count = 0

  const increment = () => count++
  const decrement = () => count--
  return { count, increment, decrement }
}
const result = createCounter()
result.increment()
result.increment()
console.log(result.count)


// TODO
const createId = () => {
  let id = 0
  return () => id++
}

const getId = createId()
console.log(getId())
console.log(getId())
console.log(getId())
