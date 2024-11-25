// const arr1 = [1, 2, 3];

// const arr2 = arr1;

// console.log(arr2); //[ 1, 2, 3 ]

// arr1.push(50);
// arr1.push(60);
// console.log(arr2); //[ 1, 2, 3, 50, 60
// arr2.push(70);
//we push a new value inside arr2. but it also update arr1.
// console.log(arr1); //[ 1, 2, 3, 70 ]

//Note: array is a reference type variable. so that when we copy a array. we just get the reference address. so that while we update the variable , we update the whole reference variable.

// =======>>>>>> we can stop this things using spread operator.

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); //[ 1, 2, 3 ]

//if i push a new value inside arr1. it doesn't change the arr2.
arr1.push(9);
console.log(arr1); //[ 1, 2, 3, 9 ]
console.log(arr2); //[ 1, 2, 3 ]

//Note: while i use spread operator to copy a reference type operator and the change the variable. it doesn't change the reference.it then make a new array. so that the arr1 and arr2 value is different.

// ====>>>>How spread operator work ?
//spread operator work like "for of" loop.

const arr3 = [];
for(let item of arr1){
    arr3.push(item);
}
console.log("arr3 is" ,arr3); //[ 1, 2, 3, 9 ]
