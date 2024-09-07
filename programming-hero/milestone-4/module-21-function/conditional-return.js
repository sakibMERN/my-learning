//Check even number
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5)); //false
console.log(isEven(110)); // true


console.log("==========");

//Check odd number
function isOdd ( number){
    if(number % 2 === 1){
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(15)); //true
console.log(isOdd(20)); //false