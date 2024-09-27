//data access

//object of array
const data = [{id: 1, name: 'abul', address: "kochu khet"}];
// console.log(data);
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: "lenovo laptop", price: 65000 },
        {id: 2, name: "macbook", price: 165000}
    ]
}

//get second products value
// console.log(products);
// console.log(products.data);
// console.log(products.data[1]);
// console.log(products.data[1].price);


const user = {
    id : 5001,
    name: "sariful raj",
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorodi'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    name: "pori bibir mazar",
    address: {
        city: "Chittagong",
        country: "Bangladesh"
    }
}
// console.log(user);
// console.log(user.address);
// console.log(user.address.street);
console.log(user.address.street?.second);
console.log(user2.address.street?.second);