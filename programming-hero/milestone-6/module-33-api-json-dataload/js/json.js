/**
 * Note: if you want to convert an object to a JSON STRING, you have to use "JSON.stringify()". 
 * And if you want to convert a string to an object , you have to use "JSON.parse()"
 * 1. JSON.stringify()
 * 2. JSON.parse()
 */

const user = {id: 1, name: "Gorib Aamir", job: "actor", married: true};
console.log(user); 

//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
console.log(stringified);

/**
 *{ id: 1, name: 'Gorib Aamir', job: 'actor', married: true }
{"id":1,"name":"Gorib Aamir","job":"actor","married":true}

**Difference between JSON & Object.
1. JSON data use double quotation("") on the both side (key value) pair when it is string data. but object use quotation on the value side.

 */


const shop = {
    owner: "Alia",
    address: {
        street: "kochu khet vooter goli",
        city: "Ranbir",
        country: "Bangladesh"
    },
    products: ["laptop", "mic", "monitor", "keyboard"],
    revenue: 45000,
    isOpen: true, 
    isNew: false
}

// console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);



//==>>> make it string to an object. 
const JsonObj = JSON.parse(shopJson);
console.log(JsonObj);