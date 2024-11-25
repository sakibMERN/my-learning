const products = [
    {name: "laptop", price: '32000', brand: 'lenovo', color: 'silver'},
    {name: "phone", price: '7000', brand: 'iphone', color: 'golden'},
    {name: "watch", price: '3200', brand: 'casio', color: 'yellow'},
    {name: "sunglass", price: '300', brand: 'ray', color: 'black'},
    {name: "camera", price: '9000', brand: 'cannon', color: 'gray'},
    
];

//1. =====>>>>>> map()
// it give you a new array
// it doesn't change the original array.
const brands = products.map(product => product.brand);
// console.log(brands); //[ 'lenovo', 'iphone', 'casio', 'ray', 'cannon' ]

const price = products.map(product => product.price);
// console.log(price); //[ '32000', '7000', '3200', '300', '9000' ]


//2. ======>>>>>forEach()
//it doesn't return result

products.forEach(product => console.log(product.color));
products.forEach(product => {

})


//3. =======>>>>> filter
// it return an array.
// it filter your condition result

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

// expected result 
// [
//     { name: 'watch', price: '3200', brand: 'casio', color: 
//   'yellow' },
//     { name: 'sunglass', price: '300', brand: 'ray', color: 
//   'black' }
//   ]

const spacificName = products.filter(product => product.name.includes("n"));
// console.log(spacificName);

// expected result 
//  [
//     { name: 'phone', price: '7000', brand: 'iphone', color: 'golden' },
//     { name: 'sunglass', price: '300', brand: 'ray', color: 
//   'black' }
//   ]


// 4.======>>>>> find()
// it give you the first result which condition you provided
//it give you just the first result . so that it can't provide you array.
const special = products.find(product => product.name.includes("n"));
console.log(special); //{ name: 'phone', price: '7000', brand: 'iphone', color: 'golden' }