/**
 * array has some duplicate elements.
 * remove the duplicate from array and create a new array.
 */

const biriyaniKhor = ["abul", "babul", "cabul", "abul", "babul", "dabul", "kabul", "cabul"];


function removeDuplicate (array){
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    // console.log(unique);
    return unique;
}

const uniqueArray = removeDuplicate(biriyaniKhor);
console.log(uniqueArray);


/**
 * remove duplicate from the numbers array.
 */
const numbers = [1, 3, 5, 3, 6, 76, 5, 45,33,34,64];

function removeDuplicate2(numbers){

    const uniqueNumber = [];
    for(const item of numbers){
        if(uniqueNumber.includes(item) === false ){
            uniqueNumber.push(item);
        }
    }
    return uniqueNumber;
}

const remove2 = removeDuplicate2(numbers);
console.log(remove2);