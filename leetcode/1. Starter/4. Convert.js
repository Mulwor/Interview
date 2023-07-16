// ! links: https://leetcode.com/problems/convert-the-temperature/description/

// * You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
// * You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
// * Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// * Input: celsius = 36.50
// * Output: [309.65000,97.70000]

var convertTemperature = function (celsius) {
  let Kelving = celsius + 273.15 // 309.65
  let Fanrenheit = celsius * 1.8 + 32.0 // 97.7
  return [Kelving, Fanrenheit]
}


function convertTemperature(celsius) {
    return [273.15 + celsius,  1.8 * celsius + 32] 
};

var convertTemperature = function(celsius) {
    const k = celsius + 273.15;
    const f = celsius * 1.8 + 32;
    return [k.toFixed(5), f.toFixed(5)];
};