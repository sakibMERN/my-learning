// let num = 1;
// let sum = 0;

// while (num <= 10) {
//     console.log(num);
//     sum = sum + num;
//     console.log(sum);
//     num ++;
// }


// let total = 0;

// for(let i = 11; i <= 20; i++){
//     total = total + i;
//     console.log(i);
// }
// console.log("The total number is :", total);

//Give me the sum of numbers from 1 to 20 that are divisible by 3.

let sum1 = 0;

for (let i = 0; i <= 20; i++){
    if ( i % 3 === 0){
        sum1 = sum1 + i;
    }
}
console.log(sum1);

//Another way

let numTotal = 0;
let i = 0;

while(i <= 20){
    if(i % 3 === 0){
        numTotal = numTotal + i;
    }
    i++;
}

console.log(numTotal);