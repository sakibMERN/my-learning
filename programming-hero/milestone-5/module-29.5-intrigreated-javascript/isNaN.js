// console.log(isNaN(NaN));  //true
// console.log(isNaN(undefined));  //true


function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
  console.log(milliseconds("abc"));
  // Expected output: "Not a Number!"
  
//   console.log(milliseconds('0.0314E+2'));
  // Expected output: 3140


/***String */
console.log(isNaN("56"));  //false
console.log(isNaN("37.37"));  //false
console.log(isNaN("5,6"));  //true
console.log(isNaN("123abc"));  //true
console.log(isNaN(""));  //false
console.log(isNaN(" "));  //false

/**Dates */
console.log(isNaN(new Date())); //false Date objects can be converted to a number (timestamp)
console.log(typeof(new Date())); //object
console.log(isNaN(new Date().toString())); //true the string representation of a Date object cannot be parsed as a number

console.log(typeof(new Date().toString())); //string

/**array */
console.log(isNaN([]));  //false the primitive representation is "", which coverts to the number 0
console.log(isNaN([1]));  //false the primitive representation is "1"
console.log(isNaN([1,2]));  //false the primitive representation is "1,2", which cannot be parsed as number
