const person = {
    name: "kodom ali", 
    job: "badam khai",
    33: "thirty three",
    'add-dress': "kochu khet"

}

console.log(person.job);
// console.log(person[name]);  //error
/**Note: if you want to get output just use square brackets it give you error. 
 * ==> you have to make the arguments "string" or assign a "variable";
 */
const prop = "job";
console.log(person[prop]);
console.log(person['name']);
// console.log(person.33);
console.log(person[33]);
// console.log(person.add-dress); //error
console.log(person["add-dress"]);

//different type of notation
const variable = "name";
const obj = {
    name: "value"
};

//bracket notation
// console.log(obj.variable); //undefined
console.log(obj[variable]); //value

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);
