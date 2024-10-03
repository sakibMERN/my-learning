const myInfo = {
    name: "sakib",
    age: 25,
    address: "khulna",
    sosurName: "katappa",
    sosurBari: "b.baria",
    contact: {
        phone: 6565461,
        email: "katappa@email.com",
    },
};

const myName = myInfo.name;
const myAge = myInfo.age;
console.log(myName); //sakib
console.log(myAge); //25

//You can use destructuring method for more efficiency.

const {name} = myInfo;
console.log(name); //sakib

//Note: for object destructuring your variable name have to set as same as object property name.
//Note: You don't have maintain sequence as like as array destructuring.
const {address} = myInfo;

/** You can set custom variable name in object destructuring*/
const {age: amarNam} = myInfo;
// console.log(age); //ReferenceError: age is not defined
//because I already set a custom variable for age.
console.log(amarNam); //25

/**If an object inside another object. How could you destructure that?
 * 1. get destructure the parent object first.
 * 2. then destructure your object and get the inside object in a variable.
 * 3. then destructure the inside object.
 * 
 */

const {contact} = myInfo;
console.log(contact);  //{ phone: 6565461, email: 'katappa@email.com' }
const {phone} = contact;
console.log(phone); //6565461