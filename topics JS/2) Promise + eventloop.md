#### VI. Eventloop and Promise

0. Что такое Promise? Разница между Promise.all(), Promise.any() и Promise.race()?

3. Преимущества использовании промисов вместо колбэков?
4. Что такое коллбэк-функция (Callback)? Что такое Callback Hell?

6. Что такое async/await?
7. Подходы при работе с асинхронным кодом?
8. Разница между синхронными и асинхронными функциями?

9. Что такое цикл событий (event loop) и как он работает?
10. Что такое AJAX? Плюсы и минусы использовании Ajax?

---

#### VI. Ассинхронщина

1. Типы таймеров в JavaScript?

В JS есть два основных типа таймеров: 
- `setTimeout(...)` - позволяет вызвать переданную функцию один раз через определенное время
- `setInterval(...)` - позволяет вызвать переданную функцию много раз через определенный интервал времени. Чтобы отменить `setInterval` мы можем использовать тип: `clearInterval()` и внутрь передаем переменную, где использовали `setInterval`.

2. Что такое коллбэк-функция (Callback)? Что такое Callback Hell?

Коллбэк-функция - это функция, которая передана в другую функцию в качестве аргумента. Например: коллбеки могут используются при обращение к Апи, когда нам необходимо дождатся ответа, и после его получения мы можем выполнить какое-то действия. Он может также использоваться в сеттаймауте вызвав функцию alert. 

Стоит отметить, что есть такое понятие как callback hell, которая означает ад коллбеков, данный термин используется когда у нас внутри функции очень много коллбеков, что в свою очередь трудно читать, понимать и контролировать. Чтобы избежать его можно разделить на async и await, разделить на другие функции и вызвать их в качестве коллбека.

3. Что такое Promise? И расскажите про разницу между методами Promise.all(); Promise.any() и Promise.race()

Промисы - это один из способов работы с асинхронным кодом и промис содержит в себе 3 состояния: `pending` - ожидания; `resolved (fulfilled)` - выполнено успешно; `rejected` - выполнено с ошибкой. Чтобы создать промис нам необходимо использовать конструкцую так называемую new Promise, которая принимает в качестве аргумента функцию, а сама функция принимает в качестве аргумента: resolve и reject.

У промисов есть методы: `Promise.all()`, `Promise.any()`, `Promise.race()`

`Promise.all()` -  работает следующим образом: у нас есть много промисов, он дожидается (ждет) выполнения всех промисов. И если оно выполнется успешно, то вернет массив значений от всех промисов, которые были ему переданы. Однако если хотя бы один промис будет выполнен не успешно, то он выведет нам последний промис, который выполнен неуспешно. 

`Promise.allSettled()` - работает по тому же принципу, что и `Promise.all()`, однако ему не важно выполнится ли промис успешно или с ошибкой он в любом случае выполнится.

`Promise.any()` - работает следующим образом: у нас есть списков промисов, он дожидается выполнения первого успешного промиса (кл.слово успешного) и если он находится его, то он возвращает данные результат, а если нет, то выводит ошибку

`Promise.race()` - выполнится только первый промис (не имеет разницы ошибка или успешно), остальные будут игнорировать.

4. Преимущества использовании промисов вместо колбэков?

- Помогает избежать коллбек-хелл, который может быть нечитаемым

- Упрощает последовательное написание последовательного читаемого ассинхроного кода с помощью then, а также обработку ошибок с помощью catch()

- Методы промисов all, allSettled, any, race

- С использованием промисов можно избежать следующих проблем: колбэк-функция была вызвана слишком рано, поздно или вовсе не была вызвана; функция была вызвана слишком мало или слишком много раз; не удалось передать необходимую среду/параметры; были пропущены ошибки/исключения.

5. Что такое async/await? 

Способ написание ассинхроного кода, который построен на основе промисов. Он заставляет код, который работает ассинхроно, выглядить как синхронный код. Ключевое слово async возвращает всегда промис, а кл.слово await можно использовать только внутри тело функции в котором вызван async. Eсли его исп без async то выведится ошибка. 

Например: частный кейс с которым я столкнулся при запросе на бэк, мне необходимо было дождаться ответа от сервера после него эвейтом получить специальный токен для захода на сервер

---

Что такое цикл событий (event loop) и как он работает?
(Последний) Подходы при работе с асинхронным кодом?
(Последний) Что такое AJAX? Плюсы и минусы использовании Ajax?

<details>
<summary> Разница между синхронными и асинхронными функциями? Разница между async / await</summary>

Когда интерпретатор натыкается на синхронную функцию, он блокирует дальнейшее выполнения операции прежде чем данная функция будет выполнения. По этому набор таких функций выполняется последовательно - одна за другой. Ассинхронные функции наоборот не блокирует дальнейшие выполнения скрипта 

</details>