/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */




let num = 60;

while (num <= 100) {
    if (num % 2 === 1) {
        console.log(num);
    }
    num ++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let numbers = 78;

while (numbers <= 98) {
    if(numbers % 2 === 0) {
        console.log("This is even numbers: ", numbers);
    }
    numbers ++;
}