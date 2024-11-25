//here given some height in an array. now fiend the tallest one.

const heights = [65, 65, 100, 48, 85, 75 , 66, 95, 155];

function maxHeight (numbers){
    let maxNumber = 0; 
    for (let num of numbers){
        if ( num > maxNumber){
            maxNumber = num;
        }
    }
    return maxNumber;
}

const max = maxHeight(heights);
console.log("The tallest man is: ", max);

const rakib = null;
console.log(typeof rakib);