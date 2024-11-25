// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

function addString (numbers){

    let concatString = "";
    for(let number of numbers){
        concatString = concatString + number;
    }
    return concatString;
}

console.log(addString(numbers));