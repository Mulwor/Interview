


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

