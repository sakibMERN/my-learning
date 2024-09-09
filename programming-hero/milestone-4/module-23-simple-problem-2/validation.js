// number validation 

function multiply(num1, num2){
    //validating input data
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "you have to input 'number' data type.";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply("eight", 5);
console.log(result);

//string validation

function fullName(first, last){
    //validating input data
    if(typeof first !== 'string' || typeof last !== 'string'){
        return "you have to input 'string' data type.";
    }
    const result = first + " " + last;
    return result;
}

const name = fullName("Sakib",8); 
console.log(name);

//object validation
function getPrice (product){
    //validation object
    if(typeof product !== "object"){
        return "you have to input 'object' data type.";
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'rice', price: 65, color: 'white'});
// const price = getPrice([70]); //undefined
console.log(price);

// array validation 

function tallestMan(heights){
    //validating array
    if(Array.isArray(heights) !== true){
        return "you have to input 'array' data type.";
    }
    const man = heights[1];
    return man;
    
}

// const mansHeight = [65, 58, 78, 55, 88, 60];
const mansHeight = {price: 'sakib'};
// const mansHeight = ;
const tallMan = tallestMan(mansHeight);
console.log(tallMan);