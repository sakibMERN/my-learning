const arr1 = [1, 2, 3];

const arr2 = arr1;

console.log(arr2);

// arr1.push(50);
// arr1.push(60);
// console.log(arr2);

arr2.push(66);
console.log(arr2); //[ 1, 2, 3, 66 ]
console.log(arr1); //[ 1, 2, 3, 66 ]
//Note: you push 66 on arr2 . normally arr2 get the result. But but when you get the arr1 , you see the 66 inside the arr1 !!!!! How is it possible!!! The reason is , when you copy an array. it doesn't copy the value. it just get the reference. That's why when we change one array, it just update the reference. so that it give you the same result.

//****You have a option to copy the row array.You should use for loop to get row array.

const arr3 = [2, 3, 4];
const arr4 = [];

//using for loop for coping new array.
for(let item of arr3){
    arr4.push(item);

}
console.log("This is arr4: " ,arr4); //[2, 3, 4]

//*YOU CAN GET IT MORE EASY WAY TO USE ...spread operator

const arr5 = [...arr3];

arr3.push(55);
console.log(arr3); //[ 2, 3, 4, 55 ]
console.log(arr5); //[ 2, 3, 4 ]
//Note: for using spread operator , the arr4 doesn't change.