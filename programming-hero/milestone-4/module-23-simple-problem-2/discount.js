/**
 * quantity upto 100: ---> price 100tk;
 * quantity upto 101-200: --> price 90tk.
 * quantity more than 200: ---> price 70tk.
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        console.log("The base price is: " + 100);
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        console.log("The base price is: " + 90);
        return total;
    }
    else{
        const total = quantity * 70;
        console.log("The base price is: " + 70);
        return total;
    }
}

const totalPrice = discountPrice(201);
console.log("You have to pay: " ,totalPrice);