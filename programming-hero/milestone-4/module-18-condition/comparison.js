console.log(5 > 10); //false
console.log(5 < 10); //true
console.log(5 == 10); //false
console.log(10 == 10); //true
console.log(10 >= 10); //true
console.log(15 >= 10); //true
console.log(5 >= 10); //false
console.log(5 <= 10); //true
console.log(10 <= 10); //true
console.log(100 <= 10); //false

console.log(10 == 10); //true
console.log(10 == parseInt(10.10)); //true
console.log(10 == parseFloat(10.10)); //false


//--------------------------------------

var payara = 40;
var apple = 100;

console.log(payara < apple); //true
console.log(payara > apple); //false

/**
 * 
 * == 
 * ===
 */

console.log(10 == '10'); //true ** the value is equal.
console.log(10 === '10'); //false **because the value is equal but the type is not equal.

//----------------------------

console.log(10 != '10'); //false
console.log(10 !== '10'); //true !== means , this compare value and type

console.log(10 != '5'); //true 
