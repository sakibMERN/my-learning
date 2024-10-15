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

const myName = myInfo.name;
const myAge = myInfo.age;

//We can use object spread for better performance
const {age, name, address:myAddress} = myInfo;
console.log(age); //25


//I can use custom variable name
console.log(myAddress); //rajshahi

// console.log(address); //ReferenceError: address is not defined

// Note: if i set a custom variable name instead of main variable name. I have to call it custom variable name. Else, i call it main variable name , it give me an error.Because when i set a custom variable ,then the main variable aren't exist.

// ======>>>>>>If one object is an another object.
const {contact} = myInfo

console.log(contact); //{ phone: 235465, email: 'katappa@sosur.com' }
// const {email} = contact;
// console.log(email); //katappa@sosur.com

//Or I can find it directly
const {contact:{email}} = myInfo;
console.log(email); //katappa@sosur.com