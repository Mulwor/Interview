console.log("---- Простая проверка----")

console.log(typeof 0)                        
console.log(typeof true)                     
console.log(typeof 'Javascript')             
console.log(typeof undefined)               
console.log(typeof Math)                     
console.log(typeof Symbol('JS'))             
console.log(typeof null)                    
console.log(typeof function() {})            
console.log(typeof NaN)                      
console.log(typeof typeof 100)               


console.log("---- Явное приведение типов, а также thruthy/fasly----")

console.log(Boolean(''))                   
console.log(Boolean('Hello'))               
console.log(Boolean(' '))                 
console.log(Boolean('0'))                 
console.log(Boolean(0))                
console.log(Boolean(1))                   
console.log(Boolean(null))                 
console.log(Boolean(undefined))            
console.log(Boolean(false))                
console.log(Boolean([]))                  
console.log(Boolean({}))                  
console.log(Boolean(Symbol()))            
console.log(Boolean(function(){}))        

console.log(Number(" 123 "))             
console.log(Number("123z"))              
console.log(Number(true))              
console.log(Number(false))             
console.log(Number("\n"))

console.log(String(123))                   
console.log(String(-12.3))                  
console.log(String(null))                   
console.log(String(undefined))             




let a = 3
let b = new Number(3)          
let c = 3

console.log(a == b)     
console.log(a === b)    
console.log(b === c)