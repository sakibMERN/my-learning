const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
}

console.log(glass);

//get all keys of object
const keys = Object.keys(glass);
console.log(keys);  //[ 'name', 'color', 'price', 'isClean' ]

//get all values of object
const values = Object.values(glass);
console.log(values);  //[ 'glass', 'golden', 12, true ]

//get all key & values of object
const pair = Object.entries(glass);
console.log(pair); //return array of array
//array of array or two dimensional array 
/**
 * [
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isClean', true ]
]
 */

/**Remove property from object */

// delete glass.isClean;
// console.log(glass);  //{ name: 'glass', color: 'golden', price: 12 }

const {price, ...shortGlass} = glass;
console.log(shortGlass);  //{ name: 'glass', color: 'golden', isClean: true }


/**Freeze */
// Object.freeze(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;

console.log(glass); //{ name: 'glass', color: 'golden', price: 12, isClean: true }

/**seal */
//Note: Is is like freeze. But it give you some relax. you just modify you object when using "seal".
Object.seal(glass);
delete glass.color;

glass.price = 4444;

console.log(glass);  //{ color: 'golden', price: 4444, isClean: true, source: 'Bangladesh' }

const person1 = {
  name: "Alice",
  age: 25
}

//access value using key
console.log(person1.name); //alice
console.log(person1["age"]); //25

//getting all keys of an object
const keys1 = Object.keys(person1);
console.log(keys1);  //[ 'name', 'age' ]

//getting all value of an object
const value1 = Object.values(person1);
console.log(value1); //[ 'Alice', 25 ]

//getting all properties (entries as key-value pairs):
const entries = Object.entries(person1);
console.log(entries); //[ [ 'name', 'Alice' ], [ 'age', 25 ] ]