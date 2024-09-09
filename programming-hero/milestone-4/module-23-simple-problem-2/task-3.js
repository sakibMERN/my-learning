/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const perLaptop= 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const totalLaptopPrice  = perLaptop * laptopQuantity;
    const totalTabletPrice = perTablet * tabletQuantity;
    const totalMobilePrice = perMobile * mobileQuantity;

    const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return `total money required: ${totalPrice} `;
}

const total = calculateElectronicsBudget(5, 4 , 3);
console.log(total);