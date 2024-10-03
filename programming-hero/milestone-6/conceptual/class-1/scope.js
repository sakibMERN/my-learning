/**
 * There are three types of variable
 * 1. global scope
 * 2. block scope
 * 3. functional scope
 */

//Global scope
// const x = 5;

// console.log(x);

// if(true){
//     console.log(x);
// }

// function show(){
//     console.log(x);
// }

// show();

//Block scope

// {
//     let x = 5;
//     console.log(x);
// }

// console.log(x);

// const x = 5;

// const x = 10;
// console.log(x); //SyntaxError: Identifier 'x' has already been declared

// const x = 5;

// x = 10;
// console.log(x); //TypeError: Assignment to constant variable.

// const x = 5; 


{
    // console.log(x); //5
    //Note: If you declared a variable globally. and the call it in a block . it will be work. if another variable has been declared inside block.
}

//another example
// const x = 5;
{
    // const  x =10;
    // console.log(x); //10
}
// console.log(x); //5


//another example using var
{
    // var x =10;
    // console.log(x); //10
}
// console.log(x); //10
//Note: if you declare a variable inside a block scope using "var" , you can access it globally.


/**Function scope */

// function show(){
//     const x = 5;
//     console.log(x);
// }
// show();
// console.log(x);

// function show1(){
//     var x = 10;
//     console.log(x);
// }
// show1(); //10
// console.log(x); //ReferenceError: x is not defined
//Note: If you declare a variable inside a function using "var". It couldn't access outside of the function. Because it just work when the function run.

// function show3(){
//     x = 15;
//     console.log(x); //15
// }
// show3(); 
// console.log(x); //15
//Note: if you declared a value without variable name. it goes to a global variable.