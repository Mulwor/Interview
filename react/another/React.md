#### React

##### Основы

<details>
<summary> В чем разница между обработкой событий HTML и React?</summary>

- В HTML имя события обычно пишется строчными буквами по соглашению: `<button onclick="activateLasers()"></button>`. В то время как в React следует соглашению camelCase :
  `<button onClick={activateLasers}>`

- В HTML мы можем вернуться false, чтобы предотвратить поведение по умолчанию:
  `<a
  href="#"
  onclick='console.log("The link was clicked."); return false;'
/>`. В то время как в React вы должны вызывать preventDefault() явно:

```
function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}
```

</details>

<details>
<summary> Как передать параметры обработчику событий (event handler) или обратному вызову (callback-function)? </summary>

1. Если мы говорим про компонент, то через пропсы к дочерним компонентам можно передавать функцию

2. Чтобы передать параметры обработчику событий можно обернуть в стрелочную функцию. Это действие равносильно использованию .bind:

```
<button onClick={() => this.handleClick(id)} />
```

```
<button onClick={this.handleClick.bind(this, id)} />
```

</details>

<details>
<summary> Что такое SyntheticEvents (синтетические события) в Реакте? </summary>

`SyntheticEvents` - это кроссбраузерная обёртка над нативным экземпляром события. Его API такой же, как и собственное событие браузера, включая stopPropagation()и preventDefault(), за исключением того, что события работают одинаково во всех браузерах.

</details>

<details>
<summary> Что такое встроенные условные выражения (inline conditional expressions)?</summary>

Вы можете использовать операторы if или тернарные выражения , доступные в JS, для условного отображения выражений. Помимо этих подходов, вы также можете встроить любые выражения в JSX, заключив их в фигурные скобки, а затем логический оператор JS &&.

```
<h1>Hello!</h1>;
{
  messages.length > 0 && !isLogin ? (
    <h2>You have {messages.length} unread messages.</h2>
  ) : (
    <h2>You don't have unread messages.</h2>
  );
}
```

</details>



<details>
<summary> В чем пользов рефов (refs)? Как создавать рефы (refs)? </summary>

В основном нам надо избегать рефов, однако они могут быть полезны когда нам нужен прямой достук к элементу DOM или к экземпляру компоненту

Создаются с помощью метода `React.createRef()` и прикрепляются к элементам React через ref атрибут.

</details>

<details>
<summary> Что такое React.forwardRef</summary>

`React.forwardRef` - функция, которая позволяет передать рефы в качестве пропсов дочерному компоненту.

```
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
```

</details>


<details>
<summary> Что такое поднятие состояния в верх в React? </summary>
Это паттерн, которое с помощью одного состояние может быть использовано сразу для несколько компонентов. Обычно некоторые компоненты должны реагировать на одни и те же события или изменения состояния, поэтому необходимо каким-то образом уведомлять все компоненты когда что-то изменилось как раз и используется состояние поднятие вверх. Это означает что общее состояние должно быть поднятно до общего ближайшего предка
</details>



<details>
<summary> Что такое компоненты высшего порядка? </summary>

Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент. Она смотрит на входящие пропсы и принимает на их основании решение : перерисовывать или не перерисовывать.

</details>

