/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let n = 3;

while(n <= 100){
    n++
    if(n*n === 9){
        console.log(n);
        break;
    }
}