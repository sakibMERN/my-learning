//normal function (function declaration)
// function add (a, b){
//     const result = a + b;
//     return result;
// }
function add (a, b){
    return a + b;
}

const sum = add(5, 90);
console.log(sum);

//function expression
const add2 = function(a,b){
    return a + b;  
}

const result2 = add2(5,5);
console.log(result2);

//arrow function
const total = (a, b) => a + b;

const add3 = total(10, 10);
console.log(add3);

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const total1 = add4(4,5,6,7);
console.log(total1);

const multiply = (num1,num2) => num1 * num2;

const mulNumber = multiply(6,5);
console.log(mulNumber);
