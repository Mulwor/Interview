// ! ====================================== Пример №1 ================================================

// * Простой счет - Без алгоритма prefix-sum-array
const simpleCodeWithoutPrefix = (array) => {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[1] + array[2] + array[3] + array[4]
  }

  return array
}

simpleCodeWithoutPrefix([1, 2, 3, 4, 5])


const simpleCodeWithPrefix = (array) => {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i] + array[i - 1]
    // 	array[i] += array[i-1]
  }

  return array
}

simpleCodeWithPrefix([1, 2, 3, 4, 5])