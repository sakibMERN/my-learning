const numbers = [12, 10, 8, 15, 7];

//get double
const doubled = numbers.map(num => num * 2);
// console.log(doubled); //[ 24, 20, 16, 30, 14 ]

//get five bonus
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus); //[ 17, 15, 13, 20, 12 ]

//get half
const half = numbers.map(num => num/2)
// console.log(half); //[ 6, 5, 4, 7.5, 3.5 ]

//get length
const friends = ['tom', 'jon', 'mikel', 'oliver'];

const length = friends.map(friend => friend.length);
// console.log(length);

//get first character
const firstChar = friends.map(friend => friend[0])
console.log(firstChar); //[ 't', 'j', 'm', 'o' ]