/**
 * create a function that will return only the even numbers
 * return the some of even numbers
 */

function evenNumbersOnly(numbers){
    // console.log(numbers);
    const even = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            // console.log("even number: " ,number);
            even.push(number);
        }
        else{
            continue;
        }
    }
return even;
}

const numbers = [4, 5, 43, 23, 44, 54];
const even = evenNumbersOnly(numbers);
console.log(even);