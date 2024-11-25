//1. ========>>>>>JSON => stringify, parse
const student = {
    name: "sakib",
    age: "32",
    movies: ['king khan', 'dhakar mastan']
}

//convert object to json
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

//convert JSON to object
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. ======>>>> fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

//3. =====>>>> keys, values
const keys = Object.keys(student);
// console.log(keys); //[ 'name', 'age', 'movies' ]
const values = Object.values(student);
// console.log(values); //[ 'sakib', '32', [ 'king khan', 'dhakar mastan' ] ] 

//4. ======>>>>> loop
const numbers = [23, 54, 67, 87, 23, 78];

//if we don't have return, we can use forEach()
// numbers.forEach(num => console.log(num));

//if we need return, we can use map().
numbers.map(num => num * 2);

//"for of" on array like object
//loop on an object using "for in"


//5. =====>>> add or remove from an array
const products = [
    {name: "laptop", price: '32000', brand: 'lenovo', color: 'silver'},
    {name: "phone", price: '7000', brand: 'iphone', color: 'golden'},
    {name: "watch", price: '3200', brand: 'casio', color: 'yellow'},
    {name: "sunglass", price: '300', brand: 'ray', color: 'black'},
    {name: "camera", price: '9000', brand: 'cannon', color: 'gray'},
    
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

//copy products array and then add new product
const newProducts = [...products,newProduct];
// console.log(newProducts);


//create a new array without one specific item
//remove means create a new array without the phone
const remaining = products.filter(product => product.name !== "phone");
console.log(remaining);