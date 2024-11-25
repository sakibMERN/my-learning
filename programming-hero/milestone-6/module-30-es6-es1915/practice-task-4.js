/**
 * Write an arrow function where it will do the following:
 * 1. It will take two array inputs.
 * 2. Combine the two arrays and assign them in a new array.
 * 3.Find the maximum number from the new array and return the result.
 */

const number1 = [34, 53, 23, 55, 44];
const number2 = [83, 22, 12, 34];

const maximumNumber = (arr1, arr2) => {
    const combineArr = [...arr1, ...arr2];
    const maxNumber = Math.max(...combineArr);
    return maxNumber;
}

const result = maximumNumber(number1, number2);
console.log(result);