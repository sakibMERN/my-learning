const phones = [20000, 15000, 50000, 100000, 12000, 30000, 65000, 10000];

function chipestPhone(phones){

    let price = phones[0];
    for( let phone of phones){
        if( price > phone){
            price = phone;
        }
    }
    return price;
}

let myPhone = chipestPhone(phones);
console.log("This is my cheapest phone: " ,myPhone);