//Find out the cheapest phone

const mobiles = [
    {name: 'samsung', price: 50000, camera: '12mp', color: 'black'},
    {name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'vivo', price: 14000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 35000, camera: '12mp', color: 'black'},
    {name: 'iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 20000, camera: '12mp', color: 'black'},
]

function minPrice(mobiles){

    let lowPrice = mobiles[0];
    for(let phone of mobiles){
        if( lowPrice.price > phone.price){
            lowPrice = phone;
        }
    }
    return lowPrice;
}

const myPhone = minPrice(mobiles);
console.log(myPhone);