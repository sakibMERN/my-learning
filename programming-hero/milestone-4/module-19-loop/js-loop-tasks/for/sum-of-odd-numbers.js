

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
function oddSum(start,end){

    let sum = 0;
    for(let i = start; i <= end; i++){
        if(i % 2 === 1){
            sum = sum + i;
        }
        
    }
    return sum;
}

console.log(oddSum(91, 129));

// function oddSum(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 1) { // Only add odd numbers
//             sum = sum + i;
//         }
//     }
//     return sum;
// }

// console.log(oddSum(91, 129));
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/