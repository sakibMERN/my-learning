/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */


let num = 81;
let sum = 0;

while (num <= 131) {
    // console.log(num);
    if (num % 2 !== 0) {

        sum = sum + num;
        // console.log(sum);
        
    }
    num ++;
    
    
}
console.log(sum);
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.


 */

let numbers = 206;
let total = 0;

while (numbers <= 311) {
    if (numbers % 2 === 0) {
        total = total + numbers;
    }
    numbers ++;
}

console.log("the total number is: ", total);
