Math - работает с Number-типом, не работает с BigInt. 

Методы:

1. Math.abs - возвращает абсолютное значение числа

```
Math.abs(-Infinity);       => Infinity
Math.abs(-1);              => 1
Math.abs(-0);              => 0
Math.abs(0);               => 0
Math.abs("");              => 0
Math.abs([]);              => 0
Math.abs(1);               => 1
Math.abs(Infinity);        => Infinity
```