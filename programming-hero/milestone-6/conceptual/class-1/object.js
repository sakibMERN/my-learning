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

const obj2 = myInfo;
obj2.married = false;
// console.log(myInfo);
// console.log(obj2);

const myInfo2 = {
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

const obj3 = {...myInfo2}; 
//to use spread operator on object, you have to use {}
obj3.children = false;
obj3.age = 31;
console.log(myInfo2);
//expected result is:{
//   name: 'sakib',
//   age: 25,
//   address: 'khulna',
//   sosurName: 'katappa',
//   sosurBari: 'b.baria',
//   contact: { phone: 6565461, email: 'katappa@email.com' }
// }
console.log(obj3);
//expected result is:{
//   name: 'sakib',
//   age: 31,
//   address: 'khulna',
//   sosurName: 'katappa',
//   sosurBari: 'b.baria',
//   contact: { phone: 6565461, email: 'katappa@email.com' },
//   children: false
// }


