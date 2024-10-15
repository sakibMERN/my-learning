// there are three types of scope
//1. global scope
//2. block scope (let, const follow block scope rule)
//3. functional scope

/**Global scope */

// const x = 5; //we declare x = 5 globally.
// console.log(x); //5

// if(true){
//     // console.log(x); //5
// }

// function show(){
//     // console.log(x); //5
// }
// show();

// ===>>>

/**Block scope */

// {
//     let x =7;
//     // console.log(x);
// }
// console.log(x); //x is not defined

//Note: a block scope variable doesn't work outside of his block

// ===>>>

// const x = 10;

// const x = 10;
// console.log(x); //SyntaxError: Identifier 'x' has already been declared

// =====>>>>

// {
//     let x = 11;
//     console.log(x); //11
// }
// console.log(x); //10

//Note: you can redeclare a same name variable inside a block ones.

// =====>>>

//when use "var" as a block scope variable , It can't be a block scope. It make the variable globally.
// {
//     var a = "Bangladesh"
//     console.log(a); //bangladesh
// }

// console.log(a); //bangladesh

// Note: Here var can use globally 

// ==>>>

/**Functional scope */

// function show(){
//     var x = 5;
//     console.log(x); //x
// }
// show();
// console.log(x); //ReferenceError: x is not defined

// Note: var can't access outside of functional scope.

// ===>>>>
function show(){
    x = 5;
    console.log(x); //5
}
show();
console.log(x); //5

// Note: If you declare any variable without using "var, let or const", you can access is globally . (BUT you never use this) 