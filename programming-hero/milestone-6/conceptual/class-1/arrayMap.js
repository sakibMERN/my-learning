const arr = [10, 20, 30, 40, 50];

// arr.map((item) => {
//     console.log(item);
// })

// ======>>>>map() also give us three things.
// 1. item
// 2. index
// 3. whole array

// arr.map((item, index, fullArray) => {
//   console.log("item: ", item, "index: ", index, fullArray);

//   // expected output
//   //     item:  10 index:  0 [ 10, 20, 30, 40, 50 ]
//   // item:  20 index:  1 [ 10, 20, 30, 40, 50 ]
//   // item:  30 index:  2 [ 10, 20, 30, 40, 50 ]
//   // item:  40 index:  3 [ 10, 20, 30, 40, 50 ]
//   // item:  50 index:  4 [ 10, 20, 30, 40, 50 ]
// });


const result = arr.map(a => a + 5);
console.log(result); //[ 15, 25, 35, 45, 55 ]
// Note: map() returns a new Array .
// map() doesn't change main array.
// you can ignore map return.