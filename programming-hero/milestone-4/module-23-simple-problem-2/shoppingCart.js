const products = [
    {name: "shampoo", price: 300, quantity:5,},
    {name: "chiruni", price: 50, quantity:2,},
    {name: "shirt", price: 500, quantity:3,},
    {name: "pant", price: 600, quantity:4,},
    {name: "shoe", price: 1000, quantity:1,}
];

// function shopping (products){
//     let totalPrice = 0;
//     for (let product of products){
//         let eachProductPrice = product.price * product.quantity;
//         totalPrice =totalPrice + eachProductPrice;
//     }
//     return totalPrice;
// };

function shopping(products){

    let total = 0; //store total cost
    for(const product of products){
        //calculate per product cost.
        const thisProductCost = product.price * product.quantity; 
        total = total + thisProductCost; //add every product cost in total price.
    }
    console.log(total);
}

const total = shopping(products);
console.log(total);