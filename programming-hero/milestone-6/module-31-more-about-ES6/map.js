const numbers = [4, 5, 2, 8,10];

// const doubled = [];
// for(const number of numbers){
//     const double = number * 2;
//     doubled.push(double);
// }
// console.log(doubled); //[ 8, 10, 4, 16, 20 ]

//do the same operation using map
/**
 * map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
 */

function doubleIt(num){
    // console.log("num now", num);
    return num * 2;
}
const result = numbers.map(doubleIt)
// console.log(result); //[ 8, 10, 4, 16, 20 ]

// another method of map

const double2 = n => n * 2;
const result2 = numbers.map(double2);

// console.log(result2); //[ 8, 10, 4, 16, 20 ]


const result3 = numbers.map(n => n * 2);
console.log(result3); //[ 8, 10, 4, 16, 20 ]