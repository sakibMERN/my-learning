/**difference between arrow and normal function */
function info(){
    return("Ki chai....")
}

const myName = () => "I am arrow function"

const result = info();
console.log(result);  //Ki chai....

console.log(myName()); //I am arrow function

//Note: If you use arrow function , you don't need to return it, when it is just one line.

// ======>>>> see the difference of the two function syntax

// function double(x){
//     return x*2;
// }
// console.log(double(4)); //8

//convert it into arrow function
const double = (x) => x*2;
console.log(double(5));  //10

//IF we have just one parameter, we can avoid first brackets.
const double1 = x => x*2;
console.log(double1(10));  //20

// =====>>>>> IF we have more than one parameter and the function is more than one line . we have to use "first bracket" and "return" keyword 
// const add = (x, y) => {
//     const total = x + y;
//     return total;
// }
// console.log(add(3,6)); //9

/**Default parameter */
// function add(x,y){
//     return x + y;
// }
// console.log(add(4, 5));  //9

//IF we give just one argument , it return "null"
// function add(x,y){
//     return x + y;
// }
// console.log(add( 5));  //NaN


// function add(x,y=0){
//     return x + y;
// }
// console.log(add( 5));  //5
// Note: if I don't pass a argument, and set a default value in the parameter . it then use default parameter.

// function add(x,y=0){
//     return x + y;
// }
// console.log(add( ,5));  //SyntaxError: Unexpected token ','

// function add(x=0,y=0){
//     return x + y;
// }
// console.log(add()); //0

//use default parameter inside arrow function
const add = (x=0, y=0) => x + y;
console.log(add(2,1));  //3