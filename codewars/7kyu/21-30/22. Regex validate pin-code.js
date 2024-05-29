// ! Regex validate PIN code

// * https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
// * contain anything but exactly 4 digits or exactly 6 digits.

validatePIN("1234")                             // ? ===> вернет true, потому что строка содержит 4 цифры.
validatePIN("123456")                           // ? ===> вернет true, потому что строка содержит 6 цифр.
validatePIN("123")                              // ? ===> вернет false, потому что строка содержит только 3 цифры.
validatePIN("12345")                            // ? ===> вернет false, потому что строка содержит 5 цифр.
validatePIN("1234567")                          // ? ===> вернет false, потому что строка содержит 7 цифр.
validatePIN("123a56")                           // ? ===> вернет false, потому что строка содержит недопустимый символ 'a'.

function validatePIN(pin) {
  // Код должен начинаться из 4 или 6 символов
  return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}

