console.log(' ---- Строгое равенство и нестрогое равенство -----')

console.log(2 == '2')             
console.log(2 === '2')             
console.log(undefined == null)    
console.log(undefined === null)    
console.log('0' == false)         
console.log('0' == 0)             
console.log(0 == 0)               
console.log(null == 0)             

console.log(false == '')          
console.log(false == {})           
console.log('' == 0)              
console.log('' == {})              
console.log(0 == {})               
console.log(0 == null)             

console.log(false == [])          
console.log(0 == [])              
console.log(0 == [0])             
console.log('' == [])             



// Счет
console.log('----- Счет --------')
console.log(1 + '2')                 
console.log('' + 1 + 0)             
console.log('' - 1)                 
console.log('' - 1 + 0)             
console.log('3' * '8')              
console.log(4 + 10 + 'px')            
console.log('px' + 5 + 10)             
console.log('42' - 40)             
console.log('42px' - 2)              
console.log(null + 2)              
console.log(undefined + 42)          


console.log(true + false)           
console.log(12 / 4)                 
console.log(12 / "6")               
console.log("number" + 15 + 3)     
console.log(15 + 3 + "number")      
console.log([1] > null)             
console.log("foo" + + "bar")        
console.log('true' == true)         
console.log(false == 'false')       
console.log(null == '')           
console.log(!!"false" == !!"true")  


console.log(["x"] == "x")           
console.log([] + null + 1)         
console.log([1,2,3] == [1,2,3])    
console.log({} + [])               
console.log({}+[]+{}+[1])          
console.log(new Date(0) - 0)      
console.log(new Date(0) + 0)       



console.log('------ Логические операторы -------')
console.log(0 || "0" && {})        
console.log(!+[])                 
console.log([]+![])                 
console.log(!+[]+[]+![])            



console.log(+true)
console.log(!"John")