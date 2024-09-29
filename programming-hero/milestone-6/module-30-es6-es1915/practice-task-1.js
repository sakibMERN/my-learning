/**
 * 1. Write an arrow function that will take 3 parameters , will multiply the parameters and will return the result.
 */

const mult = (a, b, c) => a * b * c;
console.log(mult(2, 3 ,4));  //24

/**
 * 2. Write the following sentence in three lines and print the result: I am a web developer . I love to code. I love to eat Biriyani.
 * 
 */

const mySentence = `I am a web developer.
I love to code.
I love to eat Biriyani.`;
console.log(mySentence);

const mySentence2 = "I am a web developer.\nI love to write code. \nI love to eat Biriyani";
console.log(mySentence2);

/**
 * 3. Write an arrow function that will take 2 parameters : One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
 */
const sum = (a, b= 5) => a + b;

console.log(sum(5)); //10