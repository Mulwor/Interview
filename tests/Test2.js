// TODO: Переменные
//
const apple = 5;
apple = 10;

//
const user = {
    name: "Вася"
  };  
user.name = "Петя"; 
user = 5; 

//
var myVar = 1;
function setMyVar() {
  myVar = 2;
}
setMyVar();
console.log(myVar);

//
var var1;
console.log(var1);
console.log(var2);
var var2 = 1;

//
let msg = "Good morning!!";
msg.name = "John";
console.log(msg.name);

//
let count = 10;
(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();

// 
function somemethod() {
  console.log(counter1); 
  console.log(counter2); 
  var counter1 = 1;
  let counter2 = 2;
}

// 
function a() {
  return b;
}
a(); 
const b = 1;
a();


// 

let a = f();              
const c = 2;            
function f() { return c } 