const person = {
    name: "Sakib",
    age: 28,
    profession: "developer",
    salary: 25000,
    married: true,
    "fav places": ["bandarban", "saint-martin", "kuakata"],
}

//How can I set value in object ?

person.salary = 30000;
person.age = 30;
console.log(person);
console.log(person.salary);

//we can assign a property in a variable.
const keyName = "profession";

//we can change value inside objects using re assign variable.
person[keyName] = "dev opps"
console.log(person[keyName]);
