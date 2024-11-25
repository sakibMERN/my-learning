/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. Arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values, Object.entries(es6)
 * 7. "for of" used in array and string,
 * 8. "for in" loop used in object
 */

const a = 56;
const numbers = [56,7,8];
const person = {
    name: 'sakib'
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`;
console.log(message);  //Hi, sakib has a: 56 access to 8

//arrow function
const squere = x => x * x;
const sum = (a, b) => a + b;

//destructuring
const {age, z,...others } = {x:2 , y: 5, z: 3, name: 'object', age: 66}

const [first, second, ...remaining] = ['ram', 'sam', 'jodu', modhu];