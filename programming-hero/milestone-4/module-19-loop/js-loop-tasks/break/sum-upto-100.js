/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let number = 1;
let sum = 0;

while(number <= Infinity) {
    sum = sum + number;
    if(sum >= 100){
        break;
    }
    console.log(sum);
    number++
}

