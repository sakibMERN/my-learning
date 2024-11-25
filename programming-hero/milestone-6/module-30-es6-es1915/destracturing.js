/**Object destructuring */

const actor = {name: 'Ananta',
    age: 30,
    phone: '01936031533',
    money: 3232330326
}

/**destructuring */
//if right side is an object left side of destructuring will be object as well

//use property name as a variable that contains the property value

// const {phone, name, age, money} = actor
//You can change variable name using :
const {phone, name, age: boyos, money} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
console.log(boyos);
// console.log(name);
// console.log(money);

/**Array destructuring */
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = numbers;
//Note: array destructuring will assemble with index number.


//
function  doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom , ditiyo] = doubleThem(6,9);

console.log(prothom, ditiyo); //12 18

const person = {
    nam: "Ananta", 
    age: 25, 
    favoriteFood: "Rice",

};
const { nam , ...rest} = person;

console.log(nam); //Ananta