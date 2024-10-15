//You can access object two way===>>>
//1. dot notation(.)
//2. brackets notation([])
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

const x = "name";
// const s = "sosurName"
// console.log(myInfo.name); //sakib
// console.log(myInfo.x); //undefined
// console.log(myInfo[s]); //katappa
// or 
// console.log(myInfo["sosurName"]); //katappa
console.log(myInfo.sosurName);
//Note: string can't access value. if you want to get a value using a variable which has a string value. you have to use brackets notation([]).

