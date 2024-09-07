function doubleIt (number){
    const double = number * 3;
    console.log("double is: ", double);
}

console.log("I will call the function");
doubleIt(15);
console.log("----------------");
doubleIt(88);
console.log("-----------------");
doubleIt(8564);

//**You can call a function by a variable. */

const number = 100;
doubleIt(number);

//Get difference  using function

function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, "difference is ", diff);
}

const fatherAge = 40;
const myAge = 10;

difference (fatherAge, myAge);