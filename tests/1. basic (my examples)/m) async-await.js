// ! Async является еще одним способом написание ассинхроного кода,
// ! который всегда возвращает промис, await добавляется в тело
// ! функции и ждет выполнения промиса. Если какой-то из await не
// ! выполнится, то дальше он не пойдет и поместится в catch, что
// ! тот в свою очередь является обработчиком ошибок

// * Function declaration
async function delay() {
  await {/* */}
}

// * Function expressopn
const wait = async function () {
  await {/* */}
}

// * Arrow function
const sleep = async () => {
  await {/* */}
}


// ToDo №1 (Then замена на async...await)
function sum(firstValue, SecondValue){ 
  return new Promise(function(resolve){
    const result = firstValue + SecondValue;
    resolve(result);
  });
}
// * Пример с then в промисах
sum(5, 3).then((value) => console.log("Результат then операции:", value));

// * Пример с async...await
async function calculate(){
  const value = await sum(5, 3);
  console.log("Результат асинхронной операции:", value);
  const value2 = await sum(6, 4);
  console.log("Результат 2 асинхронной операции:", value2);
  const value3 = await sum(7, 5);
  console.log("Результат 3 асинхронной операции:", value3);
}
calculate(); 


// ToDo №2 (Обработка ошибки)
function square(str){
  return new Promise((resolve, reject) => {
    const n = parseInt(str);
     if (isNaN(n)) reject("Not a number");
     else resolve(n * n);
    });
};

function calculateWithThen(str){     
  square(str)
    .then(value => console.log("Result: ", value))
    .catch(error => console.log(error));
}
calculateWithThen("g8");    // Not a number 
calculateWithThen("4");     // Result:  16


async function calculateWithTryCatch(str){    
  try {
    const value = await square(str);
    console.log("Result: ", value);
  } catch(error){
    console.log(error);
  }
}
calculateWithTryCatch("g8");           
calculateWithTryCatch("4");     
 