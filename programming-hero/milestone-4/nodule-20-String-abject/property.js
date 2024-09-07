const person = {
    name: "Sakib",
    age: 28,
    profession: "developer",
    salary: 25000,
    married: true,
    "fav places": ["bandarban", "saint-martin", "kuakata"],
}

// console.log(person);

/****
 * two types of system for access object
 * 1- dot notation(.)
 * 2- bracket notation([""])
 */

//**dot notation system
console.log(person.profession);

const income = person.salary;

console.log(income);

//bracket notation
// console.log(person['age']);

const boyos = person["age"];
console.log(boyos);

console.log(person["fav places"]);