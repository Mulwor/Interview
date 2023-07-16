// ! Отличие между обычных функций и стрелочных

// Синтаксис обычных функций и стрелочных
function first() {
    console.log("Hello" + " world")
}
first();

let second = () => {
    console.log("work")
    console.log("Hello" + " world")
}
second();

// This => 
const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
    alertion: value = () => {
        return this.prop;
    }
};
  
console.log(test.func());         // Expected output: 42
console.log(test.alertion())
  