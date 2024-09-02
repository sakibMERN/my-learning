/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 70;

if(age < 10) {
    console.log('You are eligible for free.'); 
    
}

else if (age >= 10 && age <= 25 ) {
    //50% discount 
    let discount = ticketPrice * 50 / 100;
    let payment = ticketPrice - discount;
    console.log(payment);
}

else if ( age >= 60) {
    //15% discount 
    let discount = ticketPrice * 15 / 100;
    let payment = ticketPrice - discount;
    console.log(payment);
}

else {
    console.log(ticketPrice);
}