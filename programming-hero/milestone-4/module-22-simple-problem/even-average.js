/***
 * function takes an array as parameter.
 * give me the average of the even numbers in the array.
 */

/**
 * 1. Put even numbers in an array.
 */

function evenAverage (numbers){
    let even = [];

    for(let number of numbers){

        if(number % 2 === 0){
            even.push(number);
        }
    }
    console.log(even);
    // now make a for of loop to make some of even array
    let sum = 0;
    for( let number of even){
        sum = sum + number;
    }
    console.log(sum);
    const evenAverage = sum / even.length;
    return evenAverage.toFixed(3);
}

const number = [2, 5, 6, 64, 44, 33, 54, 63, 26, 79];
const average = evenAverage(number);
console.log(average);