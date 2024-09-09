//find out the expensive phone

const mobiles = [
    {name: 'samsung', price: 50000, camera: '12mp', color: 'black'},
    {name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'vivo', price: 14000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 35000, camera: '12mp', color: 'black'},
    {name: 'iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 20000, camera: '12mp', color: 'black'},
];

function expensivePhone(phones){

    let luxury = phones[0];
    for(let phone of phones){
        if(luxury.price < phone.price){
            luxury = phone;
        }
    }
    return luxury;
}

const myPhone = expensivePhone(mobiles);
console.log(myPhone.name);