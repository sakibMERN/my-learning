/**
 * Looping technique
 * 1.for loop
 * 2.while loop
 * 3.do while --> ignore
 * 4.for of --> array loop korar jonno
 * 5.for in --> object loop korar jonno
 */

const friends = ["Elon", "Bill", "Mark", 'waren'];
const numbers = [23, 43,23,324,33,213,345,533,2323,34];

//********for of loop==========>>>>>
for(const friend of friends){
    // console.log(friend);
}
// find number
for(number of numbers){
    // console.log(number);
}

//********Simple for loop=========>>>>>>>
for(let i = 0; i < friends.length; i++ ){
    // console.log(i);
    // console.log(friends[i]);
}

//number array
for(let n = 0; n < numbers.length; n++){
    // console.log(numbers[n]);
}

//********simple while loop===========>>>>

let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

//number array
let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}