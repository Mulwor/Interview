// todo | Number.isInteger() - определяет, является ли переданное значение целым числом.

Number.isInteger(0);                        // true
Number.isInteger(1);                        // true
Number.isInteger(-100000);                  // true
Number.isInteger(0.1);                      // false
Number.isInteger(Math.PI);                  // false
Number.isInteger(NaN);                      // false
Number.isInteger(Infinity);                 // false
Number.isInteger(-Infinity);                // false
Number.isInteger("10");                     // false
Number.isInteger(true);                     // false
Number.isInteger(false);                    // false
Number.isInteger([1]);                      // false
Number.isInteger(5.0);                      // true
Number.isInteger(5.000000000000001);        // false
Number.isInteger(5.0000000000000001);       // true