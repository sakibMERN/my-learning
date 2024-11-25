const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    friends: ['Apu', 'Taaz', 'Salman', 'aamir'],
    movies: [
        {name: 'no. 1',year: 2015},
        {name: 'King Khan', year: 2018},
    ],
    act: function (){
        console.log("Acting like Sakib Khan");
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'United State Of America'
        }
    }
}
//console full object
// console.log(nayok);

//console friend
// console.log(nayok.friends);
// console.log(nayok.friends[3]);

//console car inside object
// console.log(nayok.car);
// console.log(nayok.car.brand);

nayok.act();