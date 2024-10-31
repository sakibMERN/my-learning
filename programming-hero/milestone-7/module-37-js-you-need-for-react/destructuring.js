//1. ==========>>> array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);

// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y); //42 65

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// console.log(boxify(90, 34));  //[ 90, 34 ]
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
// console.log(first);

const student = {
    name: "sakib",
    age: "32",
    movies: ['king khan', 'dhakar mastan']
}

// const [firstMovie, secondMovie] = ['king khan', 'dhakar mastan'];
const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie); //king khan

//2. ========>>>> object destructuring
// const {name, age} = {name: 'alu', age: 45};
const {id,name:myName, age} = {id: 12, name: 'alu',salary: 3400, age: 45};

console.log(myName); //alu
console.log(id); //12

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66, 
        weight: 67, 
        address: 'kumarkhali', 
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin',
        },
    },
}

// const {machine, ide, specification:{weight}} =  employee;
// console.log(weight);
// const {weight, address} = employee.specification;

const {brand} = employee?.specification?.watch;
console.log(brand); //garmin

