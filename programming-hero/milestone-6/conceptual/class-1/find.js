const numbers = [12, 32, 81, 85, 25, 75, 13, 55, 97, 25];

let find = [];
for (let item of numbers) {
  item > 50 ? find.push(item) : null;
}
// console.log(find); //[ 75, 54, 97 ]

//if you run a condition of an array. and when the condition will match an element. then "find()" method give you the first match element.
const result = numbers.find((item) => item > 50 && item % 2 == 0);
console.log(result); //88

// Note: if that condition doesn't match any element of this array , it return "undefined".
