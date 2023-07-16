// Todo: Promise (обычный)

// Promise - возможность выполнить ассинхронную операцию (точнее
// дождаться выполнения ассинхронной операции) и затем продолжить
// работу с чем-либо, что было внутри ассинхронности.

// ------ Пример №1 ------
let aef = 7;
// Задаю ассинхронную операцию - им может быть: таймер и ajax-запросы
// на сервер (был послан запрос на сервер, которое должен вернуть новое
// значение переменной а). Очень важно: дождаться его
setTimeout(() => {
    aef = 99
    // Операция присвоения будет выполнена через 2 секунды
}, 1000)
console.log(aef)


// ------ Пример №2 ------
// Используем промис. Он создается в виде объекта
let bbe = new Promise(function (resolve, reject) {
    // 1. Resolve - это функция, которая будет выполнена когда когда setTimeout
    // завершится удачно. Промис будет выполнять данный код и когда произойдет
    // его выполнения. то функция resolve будет запушено (и будет считаться,
    // что прошло успешно
    // 2. Reject - функция, срабатывает если в коде возникли ошибки. Другими словами работа промиса была завершена неудачно
    setTimeout(() => {
        resolve(a = 99)
    }, 2000)
})
// Необходимо написать обработчик промиса, а что если он выполнится.
// Данный код выполнится только тогда когда промис сверху отработает
// корректно, то есть через какой-то промежуток времени
bbe.then(function () {
    console.log(a)
});


// ------ Пример №3 -------
// Для того, чтобы задать последовательность для ассинхронных оппераций
// лучше всего подходит промисы
let cegf = new Promise((resolve, reject) => {
    // Если внутри promise будет добавлен throw - то он сразу вернет ошибку
    // и его можно будет отловить через catch
    // throw new Error("some error...");
    setTimeout(() => {
        if(true) {
            resolve("promise completed");
        } else {
            reject()
        }
    }, 3000);
});
// Подпись на изменения: then - успешно, catch - ошибка
cegf.then(data => console.log(data))
cegf.catch(() => console.log(error))
// finally - метод срабатывается в любом случае
cegf.finally(() => console.log("Finally"))

// ---- Пример №4 -----
// fetch - помогает осуществлять запросы к серверу, а также имеют упрощенный интерфейс, а также построен на промисах
/*

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(data => console.log(data))
.catch(() => console.log("some error...."))
*/



function fetch() {
    return new Promise(resolve => {
        resolve('some date')
    });
}

fetch()
    .then(result => {return `${result} and one`})
    .then(result => {return `${result} and two`})
    .then(result => {throw new Error (`${result} has error`)})
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => { } )



// ----------- Пример №1 ----------------
let cad = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error('error in promise'));
        // можно еще так: throw new Error('error in promise');
    }, 1500);
});

// Метод catch полностью эквивалентен методу then, у которого первый параметр null.
// c.then(null, error => console.log(error)
cad.catch(error => console.log(error))


// ----------- Пример №2 ----------------
// Промис находится в 3 состояний: pending(ожидания), fulfilled (исполнения), rejected
// (отклоненния)
let d = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let isError = true;
        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
        } else {
            reject('error in promise');
        }
    }, 3000);
});
// setInterval - циклически вызывает функцию
setInterval(() => console.log(d), 1000);



// ----------- Пример №3 ----------------
// В следующем коде вызов reject случится раньше, поэтому вызов resolve будет проигнорирован:

let e = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('error')), 1000);
    setTimeout(() => resolve('ignored'), 2000);
});



// ----------- Пример №4 ----------------
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('error');
    }, 3000);
});
promise.then(
    function(result) {
        return result + '1';
    }
).then(
    function(result) {
        return result + '2';
    }
).catch(
    function(error) {
        if (ошибкаРешаема) {
            return 'данные'; // отправляем на следующий
            then
        } else {
            // ничего не возвращаем или бросаем исключение
        }
    }
).then(
    function(result) {
        // тут решаем ошибку
    }
);

// ----------- Пример №1 ----------------
let ad = new Promise(function(resolve) {
    // resolve - функция (параметр) - если завершился
    setTimeout(function() {
        let result = [1, 2, 3, 4, 5];
        resolve(result)         // завершаем ассинхронный код
        // можно еще так: resolve([1, 2, 3, 4, 5]);
    }, 500);
});
ad.then(result => console.log(result))

/*a.then(function(result) {
    console.log(result);
});*/




// ----------- Пример №2 ----------------
let ba = new Promise(function(resolve, reject) {
    // reject -  функция, срабатывает при возникновение ошибки
    setTimeout(function() {
        let isError = false;

        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
        } else {
            reject('error in promise');
        }
    }, 1000);
});
ba.then(result => console.log(result))




// ----------- Пример №3 ----------------
let ce = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('string');
    }, 1500);
})
ce.then(result => console.log(result))
ce.then(result => console.log(result + "!"))
ce.then(result => console.log(result + ' 12 3'))



// ----------- Пример №4 ----------------
let de = [
    new Promise(resolve => setTimeout(() => resolve(1), 2000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2500)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000)),
];
// Promise.race дождемся окончания загрузки первого из промисов
Promise.race(de).then(res => console.log(res));    // [1]
// Promise.all - дожидается окончания всех промисов из нашего массива
Promise.all(de).then(res => console.log(res));     // [1, 2, 3]



// ----------- Пример №5 ----------------
function e(num) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(num * num))
    }, 3500);
}

e(5).then(res => console.log(res));



// ----------- Пример №6 ----------------
function f(num) {
    if (num > 0) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(num * num);
            }, 4000);
        });
    } else if (num === 0){
        return Promise.resolve(0);      // возвращаем промис, а не число
    } else {
        // Promise.reject - делает исключение для тех числе, которые меньше нуля
        return Promise.reject('incorrect number');
    }
}
f(0).then(res => console.log(res))
f(1).then(res => console.log(res))
f(2).then(res => console.log(res))
//f(-1).then(res => console.log(res))

// ----------- Пример №1 ----------------
let a = new Promise(function(resolve) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

a.then(console.log);
// Вывод будет: 1.
// Второй вызов resolve будет проигнорирован, поскольку учитывается
// только первый вызов reject/resolve. Все последующие вызовы –
// игнорируются.


// ----------- Пример №2 ----------------
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}
delay(1500).then(() => console.log('через 1,5 секунды'));


// ----------- Пример №3 (Цепочка промисов)----------------
const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{title: "Monday"}])
    }, 1000)
})

b
    .then((data) => {
        return 10
    })
    .then((ten) => {
        console.log('2', ten)
        return 2
    })
    .then((one) => {
        console.log('3', one)
    })

// ----------- Пример №4 (Catch может ловить ошибки вышестоящий)----------------
const c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{title: "Monday"}])
    }, 1000)
})

c.finally(() => {
    console.log("Fin")
    throw new Error("Test error")
})
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
        return 10
    })

// ----------- Пример №5 (Не является цепочкой)----------------
const promise101 = new Promise ((res, rej) => {
    res()
})
promise101.then()
promise101.then()
promise101.catch()







// !ToDo: Promise.all(), Promise.any() и Promise.race()
// Пример №1
let promises = [
	new Promise(resolve => setTimeout(() => resolve(1), 1000)), 
	new Promise(resolve => setTimeout(() => resolve(2), 2000)), 
	new Promise(resolve => setTimeout(() => resolve(3), 3000)), 
];
// Дождемся окончания загрузки всех промисов
Promise.all(promises).then((res) => console.log(res) );
// Дождемся окончания первого из промисов
Promise.race(promises).then((res) => console.log(res) );
// Если хотя бы один из промисов в массиве будет отклонен, то промис с результатом сразу же перейдет в состояние rejected.
Promise.all(promises).then((res) => console.log(res))
       .catch((err) => console.log(err));




// Пример №2
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));      
const promise4 = [promise1, promise2, promise3];
       
Promise.any(promise4).then((value) => console.log(value));  // expected output: "quick"
       



// Пример №3
const slow = new Promise(resolve => setTimeout(() => resolve(1), 6000))
const fast = new Promise(resolve => setTimeout(() => resolve(2), 3000))
const theFastest = new Promise(resolve => setTimeout(() => resolve(3), 1000))
Promise.race([slow, fast, theFastest])
        .then((value) => {
            console.log(value)  // 3
        })



// Пример №4
const slow1 = new Promise(resolve => setTimeout(() => resolve(1), 6000))
const fast1 = new Promise(resolve => setTimeout(() => resolve(2), 3000))
const theFastest1 = new Promise((resolve, reject) => setTimeout(() => reject('Some error'), 1000))
Promise.race([slow, fast, theFastest])
.then((value) => {
  console.log(value)   // эта часть будет проигнорирована, так как быстрее всех завершился промис с ошибкой
})
.catch((error) => {
  console.log(error)   // 'Some error'
})




// Пример №5
const slow2 = new Promise(resolve => setTimeout(() => resolve(1), 6000))
const fast2 = new Promise(resolve => setTimeout(() => resolve(2), 3000))
const theFastest2 = new Promise((resolve, reject) => setTimeout(() => reject('Some error'), 1000))
Promise.any([slow2, fast2, theFastest2])
  .then((value) => {
    console.log(value)   // 2
  })
  .catch((error) => {
    console.log(error)  // в эту часть кода мы не попадём
  })


// Пример №6
const promise6 = Promise.resolve(3);
const promise7 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promise8 = [promise1, promise2];

Promise.allSettled(promise8).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

// Пример №7 :

const promises9 = [
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('error'), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]
  
Promise.allSettled(promises)
       .then(([response1, response2, response3]) => {
console.log(response1)     // { status: 'fulfilled', value: 3 }
console.log(response2)     // { status: 'rejected', reason: 'error' }
console.log(response3)     // { status: 'fulfilled', value: 1 
})




var p1 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, "one");});
var p2 = new Promise((resolve, reject) => { setTimeout(resolve, 2000, "two");});
var p3 = new Promise((resolve, reject) => { setTimeout(resolve, 3000, "three");});
var p4 = new Promise((resolve, reject) => { setTimeout(resolve, 4000, "four"); });
var p5 = new Promise((resolve, reject) => { reject("reject"); });
  
Promise.all([p1, p2, p3, p4, p5]).then(value => { console.log(value);}, reason => {
    console.log(reason)
});