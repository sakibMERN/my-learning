/**
 * 
 * 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

const num = [1, 2, 3];

const letter = ["a", "b", "c", "d"];

const array1 = [];

const ball = "football";

const age = 23;


    if(Array.isArray(num)) {
        console.log("num is a array.");
    }
    else {
        console.log("num is not an array.");
    }


    if(Array.isArray(letter)) {
        console.log("letter is a array.");
    }
    else {
        console.log("letter is not an array.");
    }


    if(Array.isArray(array1)) {
        console.log("array1 is a array.");
    }
    else {
        console.log("array1 is not an array.");
    }


    if(Array.isArray(ball)) {
        console.log("ball is a array.");
    }
    else {
        console.log("ball is not an array.");
    }


    if(Array.isArray(age)) {
        console.log("age is a array.");
    }
    else {
        console.log("age is not an array.");
    }


