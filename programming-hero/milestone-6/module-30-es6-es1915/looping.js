//Note: For Of use on array or string  not in object
//Note: for in use on object
const numbers = [1,6,8,4];

//for(let i = 0; i < numbers.length; i++)
//while

for(const num of numbers){
    // console.log(num);
}

const nobab = 'siraj Ud Doula';
for(const char of nobab){
    console.log(char);
}

//Note: we can use for of loop on 'array' or 'string'

const glass = {
    name: "glass",
    color: "golden", 
    price: 12,
    isCleaned: true
};

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    // console.log(key);
}
/**
 *  expected output: name
    color
    price
    isCleaned
 */
for(const key in glass){
    const value = glass[key]
    // console.log(key,value);
}

// optional
const keys = Object.keys(glass);
// console.log(keys); //[ 'name', 'color', 'price', 'isCleaned' ]

for(const key of keys){
    const value = glass[key];
    console.log(key, value);
}

/**Expected output
 * name glass
color golden
price 12
isCleaned true
 */