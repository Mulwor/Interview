// ! Credit Card Mask

// ? Usually when you buy something, you're asked whether your credit card number, phone number
// ? or answer to your most secret question is still correct. However, since someone could look
// ? over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task
// ? is to write a function maskify, which changes all but the last four characters into '#'.

/*
  * "4556364607935616" --> "############5616"
  *   "64607935616" -->      "#######5616"
  *             "1" -->                "1"
  *              "" -->                 ""
*/

// ! =================================== Первое решение ======================================

function maskify(cc) {
  let code = ""
  
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      code += "#";
    } else {
      code += cc[i];
    }
  }
  
  return code
}

// ! =================================== Второе решение ======================================

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}
