const myAge = 18;

if ( myAge >= 18) {
    console.log('You can vote');
}
else {
    console.log('ghumai thako.');
}

//simple ternary operator-------------
const age = 18;

age >= 18 ? console.log('tumi vote dite parba') : console.log('tumi ekhono choto');


//advance ternary operator----------- 

// let price = 900;
// const isLeader = false;

if ( isLeader === true) {
    let price = 0;
    console.log(price);
}
else{
    console.log(price);
}

payAmount = isLeader === true ? 0 : price + 100;
console.log(payAmount);


//******* semi advance ternary */

let price = 1000;
const isLeader = true;

if(isLeader === true) {
    if(price >= 1000) {
        let payAmount = price / 2;
        console.log(payAmount);
    }else {
        let payAmount = price -price;
        console.log(payAmount);
    }
}
else {
    console.log(price);
}

//nested if else convert ternary
price >= 1000 ? price / 2 : 0;

//nested ternary operator
let payment = isLeader ===true ?
    price >= 1000 ? price / 2 : 0 
 : price + 100;

console.log(payment);
