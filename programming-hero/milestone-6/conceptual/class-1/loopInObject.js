const myInfo = {
  name: "sakib",
  age: "25",
  address: "rajshahi",
  sosurName: "katappa",
  sosurBari: "B.Baria",
  contact: {
    phone: 235465,
    email: "katappa@sosur.com",
  },
};

for (let key in myInfo) {
  console.log(key);
  // Expected result: name
  // age
  // address
  // sosurName
  // sosurBari
  // contact
}

//check the type
for (let key in myInfo) {
  console.log(key, typeof key);
  // // Expected result: name
  // name string
  // age string
  // address string
  // sosurName string
  // sosurBari string
  // contact string
}
// =======>>>>>

for (let key in myInfo) {
  console.log(myInfo.key);
  // Expected result: undefined
  // undefined
  // undefined
  // undefined
  // undefined
}

//Note: if i call a variable which is a string . I could not call it using dot notation for getting that value. I have to use brackets notation for getting that value.

for (let key in myInfo) {
  console.log(myInfo[key]);
  // Expected result
  // sakib
  // 25
  // rajshahi
  // katappa
  // B.Baria
  // { phone: 235465, email: 'katappa@sosur.com' }
}
