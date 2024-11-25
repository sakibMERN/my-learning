// const myInfo = {
//     name: 'sakib',
//     age: '25',
//     address: 'rajshahi',
//     sosurName: 'katappa',
//     sosurBari: "B.Baria",
//     contact: {
//         phone: 235465,
//         email: "katappa@sosur.com"
//     },
// };

// const obj2 = myInfo;
// obj2.married = false;
// obj2.age = 26;
// console.log(myInfo);
// console.log(obj2);

//Note: object is a reference type variable. so that when we copy an object. we just get the reference address. so that while we update the variable , we update the whole reference variable.

const myInfo = {
    name: 'sakib',
    age: '25',
    address: 'rajshahi',
    sosurName: 'katappa',
    sosurBari: "B.Baria",
    contact: {
        phone: 235465,
        email: "katappa@sosur.com"
    },
};

const obj2 = {...myInfo};
myInfo.married = false;
myInfo.age = 26;
console.log(myInfo);
// {
//     name: 'sakib',
//     age: 26,
//     address: 'rajshahi',
//     sosurName: 'katappa',
//     sosurBari: 'B.Baria',
//     contact: { phone: 235465, email: 'katappa@sosur.com' },  married: false
//   }
console.log(obj2);
// {
//     name: 'sakib',
//     age: '25',
//     address: 'rajshahi',
//     sosurName: 'katappa',
//     sosurBari: 'B.Baria',
//     contact: { phone: 235465, email: 'katappa@sosur.com' } 
//   }