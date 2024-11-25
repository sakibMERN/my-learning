function calculateMoney(ticketSale){
    if(ticketSale < 0 || (typeof ticketSale !== "number")){
        return "Invalid Number."
    }
    let remainingMoney = (ticketSale * 120) - (500 + (8 * 50));
    return remainingMoney;
}

console.log(calculateMoney(10)); //300
console.log(calculateMoney(1055)); //125700
console.log(calculateMoney(93)); //10260
console.log(calculateMoney(-130)); //Invalid Number.
console.log(calculateMoney('sakib')); //Invalid Number.