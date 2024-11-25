//

const numbers = [89, 35, 98, 12];
const student = {
    name: "sakib",
    age: "32",
    movies: ['king khan', 'dhakar mastan']
}

// 1.=======>>>>> template string
const about = `My name is '${student.name}'. age of '${student.age}' has number '${numbers[2]}' also liked movies '${student.movies[0]}'`
console.log(about); //My name is 'sakib'. age of '32' has number '98' also liked movies 'king khan'


//2.=====>>>>>> arrow function

//no parameter arrow function
const gerFiftyFive = () => 55;

//single parameter arrow function
const addSixtyFive = num => num + 65;

//double parameter arrow function
const isEven = x => x % 2 == 0;
console.log(isEven(3)); //false

//multi parameter arrow function
const addThree = (x,y,z) => x + y + z;

//multiline arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
} 

//3.=========>>> spread operator
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumbers); //[ 89, 35, 98, 12 ]
console.log(numbers); //[89, 35, 98, 12, 99, 99, 99]

// create a new array form an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);  //[89, 35, 98, 12, 99, 99, 99, 55]