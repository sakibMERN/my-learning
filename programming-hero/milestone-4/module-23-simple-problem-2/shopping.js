//Calculate the total cost of the products in a shopping cart

const products = [
    {name: "shampoo", price: 300},
    {name: "chiruni", price: 50},
    {name: "shirt", price: 500},
    {name: "pant", price: 600},
    {name: "shoe", price: 1000}
];

function shopping(products){

    let totalPrice = 0;
    for(let product of products){
        totalPrice = totalPrice + product.price;
    }
    // console.log(totalPrice);
    return totalPrice;
}

const total = shopping(products);
console.log("Total price of my product is: ", total);