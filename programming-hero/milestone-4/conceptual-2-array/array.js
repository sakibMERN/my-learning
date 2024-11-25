// const fruits = ["am", "jam", "kathal"];
// const flowers = ["golap", "sapla", "joba", "beli"];
// const numbers = [12, 32, 32, 34, 54, 52];

// const akakar = fruits.concat(flowers);
// const ultaAkakar = flowers.concat(fruits);
// const tinAkakar = fruits.concat(flowers,  numbers);

// console.log("this is fruits: ", fruits);
// console.log("this is flowers: ", flowers);
// console.log("this is akakar: ", akakar);
// console.log("this is ulta akakar: ", ultaAkakar);
// console.log('this is tin Akakar: ', tinAkakar);

// console.log(tinAkakar[2]);

// ================>>>>>>>>>>>>>>

/**
 * indexOf()=====>>>>>
 * if i need an element inside in array. but i don't know what is the index position of that array. So , i can find that array index number using indexOf().
 */

// const find = fruits.indexOf("kathal");
// console.log(find);

//***if you find an element which is not in the array. then the array give you (-1);
// const find = fruits.indexOf("dragon");
// console.log(find); // -1

/**
 * includes()===>>>>
 * if you want to know, does your expected element is in your array. you can use includes().
 * which give you boolean value.
 */

const flowers = ["golap", "sapla", "joba", "beli", "krishnochura"];
console.log(flowers.includes("golap")); //true
console.log(flowers.includes("krisnochura")); //false

// =============>>>>>>>

/***
 * join()====>>>>>
 *
 * if you want join array elements, you can use join() to join that elements. you can use "identifiers " for join that elements.
 */

const fool = flowers.join();
console.log(fool); //golap,sapla,joba,beli
console.log(typeof fool); //string

const fol = flowers.join("+");
console.log(fol); //golap+sapla+joba+beli

//****when you join the array elements . It return you a string.
console.log(typeof fol); //string

// ==========================>>>>>>>>>>

/***
 * split()===>>>>
 *
 * you have a string like "golap,sapla,joba,beli". You can convert your string into array using split().
 */

const string = "golap,sapla,joba,beli";

//convert string ',' to ','
const convert = string.split(",");
console.log(convert); //[ 'golap', 'sapla', 'joba', 'beli' ]

const cut = string.split("a");
console.log(cut); //[ 'gol', 'p,s', 'pl', ',job', ',beli' ]

//when We convert a string to array.and check the type of value. it show us object.
console.log(typeof convert); //object

//Note:==>>> we don't use "typeof" for checking array type.Because when we check with typeof ,it show me object. not array.

//****for checking , is the date is array type.
console.log(Array.isArray(convert)); //true

//========================================>>>>>>>>

/***
 * slice() ====>>>>
 * if you need a particular portion of an array element. you should use slice().
 * it has 2 parameter. ex- slice(2,6)
 * here 2 means the slice start with index 2 and end before the index 6( like index 5).
 */

// const flowers = ["golap", "sapla", "joba", "beli"];

console.log(flowers.slice(1,3));  //[ 'sapla', 'joba' ]

console.log(flowers.slice(2,5));  //[ 'joba', 'beli', 'krishnochura' ]


//start=== 10:30 sec