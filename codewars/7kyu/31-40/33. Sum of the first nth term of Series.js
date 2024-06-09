// * Your task is to write a function which returns the n-th term of the following 
// * series, which is the sum of the first n terms of the sequence (n is the input 
// * parameter).

```
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
```


function SeriesSum(n) {
  if (n === 0) return '0.00'
  
  let result = 1;
  let value = 4;                  

  // ? Цикл работает след.образом - на каждый шаг изменяются переменные
  for (let i = 1; i < n; i++) {
    result += 1 / value           // 1.25; 1.5; 1.75
    value += 3                    // 4, 7, 10
  }
  
  return result.toFixed(2)
}

function SeriesSum(n) {
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  
  return sum.toFixed(2); 
}