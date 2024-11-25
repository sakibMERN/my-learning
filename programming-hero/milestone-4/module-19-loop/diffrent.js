//Odd numbers

// for(let i = 0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

//Another style

// for(let i = 0; i < 20; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }

//Another style

// for(let i = 1; i < 20; i += 2){
//     console.log(i);
// }

//Using while loop

// let i = 0;

// while(i < 20){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++;
// }


/**
 * Give me the list numbers between 1 to thirty divisible by 5.
 */

// for(let i = 5; i <= 30; i += 5){
//     console.log(i);
// }

// another way 

// for (let i = 0; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}