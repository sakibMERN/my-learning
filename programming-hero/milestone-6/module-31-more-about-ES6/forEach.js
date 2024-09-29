const numbers = [1, 5, 6, 4, 15];

const result = numbers.forEach(n => console.log(n));
const result2 = numbers.forEach(n => n * 2);

const result3 = numbers.forEach(n => {
    
})

/**
 * expected result
 *  1
    5
    6
    4
    15
 */
console.log(result); //undefined ==> because forEach doesn't return

console.log(result2); //undefined