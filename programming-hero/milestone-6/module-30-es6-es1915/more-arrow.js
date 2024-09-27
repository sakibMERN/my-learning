
const difference = (x, y) => x -y;
//Note: if the arrow function is only one line. It doesn't need to return it . because it gives us implicit return.

const multiply = (first, second, third) => first * second * third;

//Single parameter or one parameter
const getAge = (person) => person.age;

const student = {name: 'ananta' , age: 45};
const age = getAge(student);

console.log(age);

const getThird = numbers => numbers[2];
//Note: You can ignore () inside arrow function , if you use only one parameter.
const third = getThird([3,4,2,5,6]);
console.log(third);

const doubleIt = num => num * 2;

const double = doubleIt(4);
console.log(double);


//no parameter
const getPi = () => Math.PI;

console.log(getPi());

//large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
    //Note: if you have use multiple line inside arrow function . you have to use return. 
}