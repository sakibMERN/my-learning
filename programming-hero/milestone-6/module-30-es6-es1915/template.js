const first = "Sakib";
const last = "Mollah";
const greet = "Potas Potas";
const name = first + " " + last + " " + greet;
// console.log(name);

const a = 10;
const b = 20;
const result = "your result is: " + a + " and " + b + " is " + (a + b);
// console.log(result);

const numbers = [45,67,32,54];
const students = {name: 'Jhon Cina', age: 25}

//using template literal 
const math = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(math);  //The sum of 10 and 20 is 30

const math1 = `The sum of array ${numbers[0]} and ${b} is ${numbers[0] + b}`;
// console.log(math1);   //The sum of array 45 and 20 is 65

const math2 = `The sum of object ${numbers[2]} and ${students.age} is ${numbers[0] + students.age}`;
console.log(math2);   //The sum of object 32 and 25 is 70

//****you can't write multiple line string using '' or "";
// const email = "hi
// dear" //expression error

/**If you want to use "" or '', you have to use \n must
 * 
 */
const email = 'Hi jhon ' +
'cena cena lage ' +
'tumi maramari korba naki?'
// console.log(email); 
//output: Hi jhon cena cena lage tumi maramari korba naki?


const email1 = 'Hi jhon \n' +
'cena cena lage \n' +
'tumi maramari korba naki?'
//**Note: you have to use (\n) to end of each line for break the line */

// console.log(email1); 
//output: Hi jhon
// cena cena lage
// tumi maramari korba naki?

//***if you use backtick(``) sign ,you can write multiple line string */

const message = `hi
I am ready
for the 
job` // this doesn't give you error

// console.log(message);

//Old way
const multiLine = "1.First \n2. Second";
console.log(multiLine);

//ES6 WAY
const newMultiline = `1. Third
2. Fourth`;
console.log(newMultiline);