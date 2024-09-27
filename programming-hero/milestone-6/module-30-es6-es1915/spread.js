//find height number of these number
const max = Math.max(16, 23,445,645);
console.log(max);

const numbers = [3,5,2,45,5,43,90, 32,15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
bondhu.push(12);

console.log(friends);  //[ 4, 5, 87, 9, 12 ]
console.log(bondhu); //[ 4, 5, 87, 9, 12 ]

const dosto = [...friends];

console.log(dosto);
friends.push(100);
console.log(friends);  //[ 4, 5, 87, 9, 12, 100 ]
//Do you notice the difference?
//Note: if you assign a variable inside a new variable and then console it. it will be provide you a new result for reference purpose;

console.log(dosto);  //[ 4, 5, 87, 9, 12 ]
//on the other hand , if you assign a variable inside a new variable with spread operator  and than console it. it will provide you old result of previous variable.


//advance 
const sonkha = [...friends, 9999];  //add extra elements while copy
console.log(sonkha);

//Spreading elements in arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const addArray = arr1.concat(arr2);
console.log(addArray); //[ 1, 2, 3, 4, 5, 6 ];

   //we can make it more easier to using spread operator
   const item1 = [1,2,3];
   const item2 = [...item1,4,5,6];
   console.log(item2); //[ 1, 2, 3, 4, 5, 6 ]

   //Spreading elements in function arguments
   const numbers1 =  [2,3,4];

   function sum(a,b,c){
        return a+b+c;
   }

//    console.log(sum(numbers1)); //2,3,4undefinedundefined

   console.log(sum(...numbers1)); //9
