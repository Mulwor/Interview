<details> 
<summary> Чем отличается детерминированность от депонтность? </summary>

Детермининрованнность - при одинаковых параметрах возвращает одинаковые входные данные. Депонтность - предпологаем предсказуемый результат.

</details>

### Function
--

</details>

<details>
<summary> 9. Что такое анонимная функция? </summary>

Анонимная функция - это функция у которого нет имени после function. Однако если мы обратится через стрелочную функцию и присвоим ей имя, то она будет уже именная фукнция и обратится к нему можно будет через имя. Также можно его вызвать через метод объекта. Можно его также вызвать по клику через addEventListener

```
const myFunc = function () {
    console.log('Hello')
}
myFunc()
```

```
const user = {
    name: 'Alex',
    age: 25,
    greet: function () {
        console.log("hi")
    }
}
user.greet()
```

```
document.getElementById("btn").addEventListener("click", function () {
    console.log("Вы кликнули по кнопке")
})
```

</details>

---



<details>
<summary> Что такое ECMAScript? В чём отличие от JavaScript? </summary>

ECMAscript - спецификация языка программирование, в котором содержатся правила, сведения и рекомендации, которые
должны соблюдаться скриптовым языки , чтобы он считался совместивым с EcmaScript. А JS одна из версий скриптового языка. EcmaScript6

</details>


#### 7. Чем отличаются друг от друга унарный, бинарный и тернарный оператор. 
Унарный - когда один аргумент у нас есть, бинарный когда два аргумента, а тернарный когда у нас есть три аргумента

К бинарному оператору можно отнесты: остаток от деление (%), + (сложение) - (вычитание)
К унарному оператору: инкремент (++), декремент (--)






