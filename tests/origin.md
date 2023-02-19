### Beginner

<details>
<summary>1. Типы данных в JavaScript и как можно их определить?</summary>

В JavaScript существует 8 типов данных, их можно разделить на примитивные и ссылочные. К примитивным относятся следующие типы: `string` (строка), `number` (число), `biginit`, `boolean`, `symbol` (уникальный идентификатор) `null`, `undefined`, а к ссылочному относится: `object`. А определить тип данных можно с помощью typeOf.
</details>


<details>
<summary>2. Разница между null и undefined?</summary>

`Undefined` - это когда переменная объявлена, но мы ей не присвоенно значение, а `null` - когда мы присвоили значение специально, и как бы говорим, что у нас есть 
переменная и она пустая. 

</details>




<details>
<summary>Какие операторы вы знаете?</summary>

Логические операторы: 
1. И (&&)
2. Или (||)
3. ! (Не)

</details>



<details>
<summary>Разница между == (нестрогим) и === (строгим) равенством?</summary>

Нестрогое равенство сравнивает просто значения без приведение типов, а строгая дополнительно сравнивает и значения и типы. 
</details>




<details>
<summary>Строгий режим (strict mode) в JavaScript?</summary>

Она появилась в ЕС5, и его цель, чтобы указать, что код будет выполняться так называемом строгом режиме. Чтобы его включить необходимо в начале строке или функции кода написать: "use strict". Например если мы объявим объект без переменной или продублируем параметры внутри функции

```
"use strict";
x = {p1:10, p2:20};      // This will cause an error
function x2(p1, p1) {};   // This will cause an error
```

</details>



### Function
<details>
<summary>Разница между function declaration и function expression?</summary>

Выделяют два способа объявлении функции:

- `Function Declaration` – функция, которая объявлена через кл.слово function. Например: `function multyple() {...}`


- `Function Expression` – функция, которая объявление через переменную. Например: `let multiply = function () {...}`

Отличия в том, что  функция, которая объявлена через кл.слово function, будут доступны, даже если обратиться к нему до того, как они были объявлене. Еще наверное стоит отметить, что если мы объявим function expression через переменную var, то и она будет всплывать 
</details>


### Hoisting 
<details>
<summary>Что такое hoisting (поднятие, всплытие)?</summary>
...
</details>



### Promise
<details>
<summary>Типы таймеров в JavaScript</summary>
...
</details>