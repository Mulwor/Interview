Вопросы здесь будут про 

- Вирт.дом;
- Методы жизненного цикла;
- Хуки;

4. Какая разница между теневым домом и виртуальным домом?
5. Назовите стадии (фазы) жизненного цикла (lifecycle) компонента? 
6. Каковы методы жизненного цикла React? 
7. Что исп в функц.компонентов чтобы симиторавать жизненные циклы? 
7.5. Расскажите о методах жизненного цикла компонента. В каких методах жизненного цикла стоит выполнять xhr запросы? Разница между didMount и willMount

8. Какие хуки вы знаете и расскажите о них по подробней? А также расскажите про премущество и недостатки хуков 
9. Разница между memo и useMemo?
10. Когда срабатывает useEffect?
11. Как сделать так, что useEffect - размонтированно работал?

---

12. Что такое предохранители (Error Boundaries)?
13. Что такое «ленивая» (Lazy) функция?
14. What is strict mode in React?
15. Что такое порталы?
16. Что такое SyntheticEvents (синтетические события) в Реакте?
17. Что такое встроенные условные выражения (inline conditional expressions)?
18. В чем пользов рефов (refs)? Как создавать рефы (refs)? 
19. Что такое React.forwardRef?
20. Что такое поднятие состояния в вверх в React?
21. Что такое компоненты высшего порядка?
22. Что такое компонент-переключатель (Switching Component)?


 
<details>
<summary>  Что такое контекст? </summary>

Он разработан для передачи данных от одного компонента к другой избегая промежуточные компоненты. Например: избегая пропс дриблинга. Чтобы создать контекст нужно написать React.createContext(), затем используя provider мы оборачиваем наш компонент, в нем мы также задать значения, а чтобы получить доступ необходимо обернуть в Consumer()

</details>



<details>
<summary>В чем смысл специального атрибута key? </summary>


Атрибут позволяет React понимать, какие именно элементы в списке были
модифицированы или удалены, что увеличивает производительность рендеринга.
Лучше всего использовать уникальные значения, такие как ID. Индексы использовать
не рекомендуется

</details>