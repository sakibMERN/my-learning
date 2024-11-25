function add(num1, num2){
    const result = num1 + num2;
    // console.log(num1, num2, result); //5 7 12
    return result;
}

// const sum = add(5, 7);
// console.log(sum);  // 5 + 7 = 12;

const sum = add(5);  
// console.log(sum);  // 5 + undefined = NaN;

// const sum = add( , 6); //expression error
 

//default --> if value is not provided, take this as a default value;

function add1(num1 = 99, num2 = 0){
    /**Note: if you don't provide argument, the default will work then. */
    const result = num1 + num2;
    
    return result;
}

const total1 = add1(5)
console.log(total1); // 5+0 = 5;

// const total = add1(4,2);
// console.log(total); // 4 + 2 = 6;

const total = add1();
console.log(total);  // 99 + 0 = 99(default value work here.)


function fullName(first, last = ""){
    const full = first + " " + last
}

function friends(numbs = []){

}

function person(human = {}{
    
})

