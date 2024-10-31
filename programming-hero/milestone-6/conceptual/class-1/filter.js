//if you run a condition of an array, and which element of that array are match the array element

const numbers = [12, 32, 81, 85, 25, 75, 13, 55, 97, 25];

const result = numbers.filter((item) => item > 50);
console.log(result); //[ 81, 85, 75, 55, 97 ]

