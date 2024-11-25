function add (price1,price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5, 85);
console.log(bill); //90

//shortcut return
function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add2(10, 100);
console.log(bill2);

//little complex function
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const mathTotal = doMath(10,5);
console.log("The total is: ", mathTotal);
