//var : no reason to use var
//let : allow it to reassign
//const : do not allow it to reassign
const money = 25;
//money = 50;  //we can't re-assign const variable;
const rich = money + 25;
console.log(rich);

let count = 0;
count = 10; //let variable allow you to re-assign value;
console.log(count); //10


//variable behavior against array
const numbers = [23,43,23,453,22,42];
// numbers = [23,4444444444,121,12];  you can't re-assign new array inside a constant variable;
numbers[1] = 55;
console.log(numbers); //[23,43,23,453,22,42]


numbers.push(3,4,5);
console.log(numbers);  //[23, 55, 23, 453, 22,42,  3,  4,   5]


//variable behavior against object
const student = {
    name : "moyna pakhi",
    class : 12
}

// student = {
//     name : "sakib"
// }  //you can't reassign variable inside const variable.

student.name = "bolaka"



console.log(student);

/**If you need to reassign value . you should declare by "let"*/

let student1 = {
    name : "moyna pakhi",
    class : 12
}

student1 = {
    name : "sakib",
}

console.log(student1); //{ name: 'sakib' }

//loop
// const sum = 0; //you can't set a const variable  which value can change while using loop;
let sum = 0;
for(let i = 1; i <= 10; i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);