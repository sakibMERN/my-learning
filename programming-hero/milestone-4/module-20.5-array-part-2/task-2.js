// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];

function evenNumbers(numbers){
    const even = [];
    for(let number of numbers){
        if(number % 2 === 0 ){
            even.push(number);
        }
    }
    return even;
}

// console.log(evenNumbers(numbers));

function evenNumbers2(numbers){

    const even2 = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            even2.push(numbers[i]);
        }
    }
    return `The even 2 is: ${even2}`;
}

console.log(evenNumbers2(numbers));