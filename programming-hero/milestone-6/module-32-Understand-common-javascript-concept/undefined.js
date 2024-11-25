/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined.
 * 2. function with no return.
 * 3. parameter that is not passed will be undefined
 * 4. If return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range.
 * 7.deleting an element inside an array
 * 8.set a value directly to undefined.
 */
// no-1
let first;
// console.log(first); //undefined

// no-2
function second(a, b) {
  const total = a + b;
}

const result = second();
// console.log(result); //undefined

//no-3
function third(a, b, c, d) {
  const total = a + b + c + d;
//   console.log(a, b, c, d);
}
third(2,5); //2 5 undefined undefined

//no-4
function noNegative(a, b){
    if (a < 0 || b < 0){
        return // what will return is un declared
    }
    return a + b;
}

const sum = noNegative(2,-5);
// console.log(sum); //undefined

// no-5
const fifth = {id: 2, name: 'ponchom', age: 30};
// console.log(fifth.age, fifth.salary); //30 undefined

// no-6
const sixth = [4, 34,5555,64];
console.log(sixth[1], sixth[5], sixth[200]);  //34 undefined undefined

// no-7
//you should not do it . Instead use splice
delete sixth[1];
console.log(sixth[1]); //undefined
console.log(sixth);  //[ 4, <1 empty item>, 5555, 64 ]

//no - 8
const eight = undefined;
// console.log(eight); //undefined

//no-9
const nine = null;
const data = {result: [], updated: null}

console.log(typeof undefined); //undefined
console.log(typeof null);  //object