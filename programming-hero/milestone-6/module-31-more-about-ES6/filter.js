//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];

const players = [75, 55, 64, 34, 64, 59, 78];

// const selected = players.filter(p => p > 70);
// console.log(selected); //[ 75, 78 ]


// const selected = players.filter(p => p > 80);
// console.log(selected); //[]

const selected = players.filter(p => p > 50);
console.log(selected); //[ 75, 55, 64, 64, 59, 78 ]

const oddNumber = players.filter(player => player % 2 === 1);
// console.log(oddNumber); //[ 75, 55, 59 ];

const friends = ['tom', 'jon', 'mikel', 'oliver'];
const oddChar = friends.filter(f => f.length % 2 === 1);
// console.log(oddChar);  //[ 'tom', 'jon', 'mikel' ]

const oddFriend = friends.filter(f => f.length > 4);
// console.log(oddFriend); //[ 'mikel', 'oliver' ]

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output); [1, 3, 5]