/**You have to give your customer layered discount.
 * first 100 quantity product have no discount.
 * second 100 quantity product have 10% (90tk per piece);
 * above 200 quantity product have 30% ( 70tk pre piece);
 * 
 */

function layeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 70;
    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        console.log("Remaining quantity is: " ,remainingQuantity);
        const remainingTotal = remainingQuantity * 90;
        const total = first100Total + remainingTotal;

        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * 70;
        const total = first100Total + second100Total + remainingTotal;

        return total;
    }
}

const totalPrice = layeredDiscount(270);
console.log("Your product cost is: ", totalPrice);