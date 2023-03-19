/*
    !Темы, которые находятся здесь:

    ? 1. Генераторы

*/

function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
