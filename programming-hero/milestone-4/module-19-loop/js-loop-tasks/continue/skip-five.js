/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let n = 55;

while(n <= 85) {
    if(n % 5 === 0){
        n++;
        continue;
    }
    console.log(n);
    n++;
}