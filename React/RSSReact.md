#### JSX

<details>
<summary>What is JSX? Is it possible to use React without JSX?</summary>

- Что такое JSX?

JSX - `(JavaScript XML)` - расширения языка JS, который позволяет разработчику объединить (использовать синтаскис) JavaScript-кода  и HTML/XML в один файл. По сути, JSX - это синтаксический сахар React.createElement. Берет наш код, который в jsx и компилирует его в функцию React.createElement.

- Можно ли использовать реакт без JSX?

Да, можно, нам просто нужно вместо компилятора уже самим писать return React.createElement.

```
function Greeting(props) {
  return React.createElement('div', null, 'Hello, ' + props.name + '!');
}
```

</details>

---

#### React DOM


<details>
<summary> What is the difference between the virtual DOM and the real DOM?</summary>

Дом представляет собой древовидную структуру, в которой каждый узел представляет собой часть документа - элемент, его атрибут или текст. Если мы используем используем ванильный JS, то мы можем получить к каждому элементу и изменить его напрямую. После того как мы меняем его, то браузер перерисовывает полностью весь наш дом, что приводит к уменьшению производительностью.

</details>


<details>
<summary> What is the virtual DOM? How does react use the virtual DOM to render the UI?</summary>

Virtual-dom - это облегченная (легковесная) копия реального дома, которая представляет собой дерево объектов. Когда состояние компонента изменяется, то реакт обновляет виртуальный DOM, а после обновления виртуальный дом текущей версии сравнивается с предыдущим домом, находить изменения и вносит их уже в настоящий дом. 

</details>


<details>
<summary> Is the virtual DOM the same as the shadow DOM?</summary>

Это разные понятие, однако в чем они схожи так в том, что они помогают решить проблемы с производительностью. Виртуальный дом создает копиью всего объекта дома, а теневой дом создает только небольшую часть. Теневой дом - концепция браузера и она необходима когда мы хотим какой-то элемент полностью изолировать, чтобы к нему даже не применялись глобальные стили.

</details>

---

#### Render

<details>
<summary> When is a component rendered?</summary>

- Когда меняется его состояния;
- Когда обновляется данные, которые приходят через пропсы;
- Когда при первом монтирование компонента, также происходит рендеринг, чтобы отобразить свое начальное положение

Грубо говоря когда он создается и когда он обновляется


</details>


<details>
<summary> How not to render on props change?</summary>

</details>


<details>
<summary> Is it OK to use arrow functions in render methods?</summary>

</details>

---

#### Interaction between components

<details>
<summary>10. How do you pass a value from parent to child?</summary>

</details>

<details>
<summary>11. How do you pass a value from child to parent?</summary>

</details>

<details>
<summary>12. What is prop drilling?</summary>

</details>

<details>
<summary>13. Can a child component modify its own props?</summary>

</details>

<details>
<summary>14. How do you pass a value from sibling to sibling?</summary>

</details>

---

#### Lifecycle and State

<details>
<summary>15. What is the difference between props and state? </summary>

</details>

<details>
<summary>16. How does state in a class component differ from state in a functional component? </summary>

</details>

<details>
<summary>17. What is the component lifecycle?  </summary>

</details>

<details>
<summary>18. How do you update lifecycle in function components? </summary>

</details>

---

#### Ref

<details>
<summary>19.  What is the difference between refs and state variables? </summary>

</details>

<details>
<summary>20. When is the best time to use refs?  </summary>

</details>


<details>
<summary>21. What is the proper way to update a ref in a function component?  </summary>

</details>

---

#### Context

<details>
<summary>22. What is the difference between the context API and prop drilling?</summary>

</details>

<details>
<summary>23. When shouldn't you use the context API?</summary>

</details>

---

#### Redux

<details>
<summary>24. Enumerate base principles </summary>

</details>

<details>
<summary>25. What is the typical flow of data in a React + Redux app? </summary>

</details>

<details>
<summary>26. Benefits of Redux? </summary>

</details>

---

#### Other 

<details>
<summary>27. Is it a good idea to use Math.random for keys? </summary>

</details>

<details>
<summary>28.  What are the limitations of React? </summary>

</details>

<details>
<summary>29. What is a higher order component? </summary>

</details>


<details>
<summary>30. What are uncontrolled and controlled components?  </summary>

</details>

<details>
<summary>31. React optimizations </summary>

</details>

