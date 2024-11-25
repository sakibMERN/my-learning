// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function colorsReverse(colors){

    let reverseColor = [];
    for(let color of colors){
        reverseColor.unshift(color);
    }
    return reverseColor;
}

console.log(colorsReverse(colors));

function colorsReverse2(colors){
    let reverseColor2 = [];
    for(let i = colors.length-1; i >= 0; i--){
        reverseColor2.push(colors[i]);
    }
    console.log('this is the second: ', reverseColor2);
}

console.log(colorsReverse2(colors));