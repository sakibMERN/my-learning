/**
 * Write an arrow function where it will do the following: x2
 * a. Square each array element.
 * b. Calculate the sum of the squared elements
 * c. Return the average of the sum of the squared elements.
 */

const numbers = [3, 4, 5, 6, 7, 2];

const averageSum = (numbers) => {
  const square = (n) => n * n;
  const newArray = numbers.map(square);
//   console.log(newArray);
  
  let sum = 0;
  for(const num of newArray){
    sum = sum + num;
    
  }
  const average = sum / newArray.length;
  return average;
};
const totalAverage =  averageSum(numbers);
console.log(totalAverage);
