const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

//simplified version
// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'iphone', price: 190000},
    {id: 3, name: 'lenovo laptop', price: 55000},
    {id: 4, name: 'dell laptop', price: 70000},
    {id: 5, name: 'samsung note 7 phone', price: 120000},
    {id: 6, name: 'nokia phone', price: 20000},
    {id: 7, name: 'xiomi Phone', price: 32000},
];

// for(const product of products){
//     console.log(product);
// }


/***
 * Note it ******
 * the two function are like same . but a little difference are there. 
 * 1. if(product.name.includes(search)) 
 * 2. if(product.name.toLowerCase().includes(search))
 */
function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}


const result = matchedProducts(products, 'phone');
console.log(result);  
/**
 * answer ====>>>
 * [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'iphone', price: 190000 },
    { id: 5, name: 'samsung note 7 phone', price: 120000 },
    { id: 6, name: 'nokia phone', price: 20000 }
]
 */


//You have adjust 'case' in your code . otherwise you could get wrong answer.



function matchedProducts2(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result2 = matchedProducts2(products, 'laptop');
console.log(result2);

/**
 * answer ====>>>
 * [
    { id: 1, name: 'walton phone', price: 19000 },
  { id: 2, name: 'iphone', price: 190000 },
  { id: 5, name: 'samsung note 7 phone', price: 120000 },
  { id: 6, name: 'nokia phone', price: 20000 },
  { id: 7, name: 'xiomi Phone', price: 32000 } //this is the difference between two code. 
]
 */