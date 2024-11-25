/***
 * Create a calculator
 */

//add
function add(num1, num2){
    const total = num1 + num2;
    return total;
}

// subtract 
function subtract(num1, num2){
    const total = num1 - num2;
    return total;
}

//multiply
function multiply(num1, num2){
    const total = num1 * num2;
    return total;
}

//division
function division(num1, num2){
    const total = num1 / num2;
    return total;
}

//calculator final operation

function calculate (a, b, operation){

    if(operation === "add"){
        const result = add(a,b);
        return` The addition of the two number is: ${result}`;
    }
    else if(operation === "subtract"){
        const result = subtract(a,b);
        return` The subtraction of the two number is: ${result}`;
    }
    else if (operation === "multiply"){
        const result = multiply(a,b);
        return` The multiplication of the two number is: ${result}`;
    }
    else if(operation === "division"){
        const result = division(a,b);
        return` The division of the two number is: ${result}`;
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'division' operation is allowed. "
    }
}

// const total = calculate(7,5,"add");
// const total = calculate(7,5,"subtract");
// const total = calculate(7,5,"multiply");
const total = calculate(7,5,"division");
// const total = calculate(7,5,"percent");
console.log(total);