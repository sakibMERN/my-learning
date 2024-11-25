const arr = [10, 20, 30, 40, 50];

//we normally use for of for array
// for(let item of arr){
//     console.log(item);
//     // expected result
//     // 10
//     // 20
//     // 30
//     // 40
//     // 50
// }

//we can forEach()
//array.forEach((arrayElement)=> console.log(arrayElement))

// function show(a){
//     console.log(a);
// }

// arr.forEach(show)

arr.forEach((item) => {
  console.log(item);
});

// ====>>>>> forEach doesn't return anything.
const result = arr.forEach((a) => console.log(a));
console.log(result); //undefined
//Note: forEach() doesn't return. so that the console on immediate above function show undefined.

// let sum = 0;
// arr.forEach((item) => {
//     sum += item;
// });
// console.log(sum); //150
//Note: forEach() doesn't change your main array.

// ======>>>>>forEach() give us three things.
// 1. item
// 2. index
// 3. whole array

arr.forEach((item, index, arrFull) => {
  console.log("item: ", item, "index: ", index, arrFull);

  // expected result
  //     item:  10 index:  0 [ 10, 20, 30, 40, 50 ]
  // item:  20 index:  1 [ 10, 20, 30, 40, 50 ]
  // item:  30 index:  2 [ 10, 20, 30, 40, 50 ]
  // item:  40 index:  3 [ 10, 20, 30, 40, 50 ]
  // item:  50 index:  4 [ 10, 20, 30, 40, 50 ]
});

// Note: array.forEach((item, index, fullArray))
