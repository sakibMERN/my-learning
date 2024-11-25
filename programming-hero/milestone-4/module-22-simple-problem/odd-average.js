/***
 * function takes an array as parameter.
 * give me the average of the odd numbers in the array.
 */

/**
 * 1. Put odd numbers in an array.
 */

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
        
    }
    //odd is the array that contain odd numbers.
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
        
    }
    console.log(sum, odds.length);
    
    const oddAverage = sum / odds.length;
    
    return oddAverage.toFixed(2);
}
const numbers = [43, 55, 34, 67, 83, 91];
const ave = oddAverage(numbers);

console.log(ave);