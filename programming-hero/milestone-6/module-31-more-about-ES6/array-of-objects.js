const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 45000},
    {id: 4, name: 'mac', price: 145000}
]

//map
const names = products.map(product => product.name);
console.log(names); //[ 'lenovo', 'dell', 'hp', 'mac' ]

const prices = products.map(p => p.price);
console.log(prices); //[ 65000, 45000, 45000, 45000 ]

//use forEach
products.forEach(product => console.log(product.id))
/**
 * expected answer
 *  1
    2
    3
    4
 */

//filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);
/**
 * expected result
 * [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 4, name: 'mac', price: 145000 }
    ]
 */

//find
const affordable = products.find(product => product.price < 50000);
// console.log(affordable); //{ id: 2, name: 'dell', price: 45000 }

//reduce
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
// console.log(total); //300000



 

function min(nums) { return Math.min(nums) }
console.log(min(1,3,2));

