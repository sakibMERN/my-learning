const petOwner = {
    name: "jolonto Kholil",
    contact: {
        phone: "0651654",
        email: "xyz@gmail.com",
    },
    pet: {
        name: "lofie", 
        info: {
            color: "black", 
            weight: "1.2 kg",
        },
    },
    food: ["apple", "orange", "peppy"]
};
// console.log(petOwner.name); //jolonto Kholil
// console.log(petOwner.contact.phone); //0651654
// console.log(petOwner.pet.info.color); //black
console.log(petOwner.address); //undefined

// console.log(petOwner.address.house); //TypeError: Cannot read properties of undefined (reading 'house')

//If when it happen , I am trying to get that property ,I don't know which is available or not available in my object. I can try it to "optional chaining".

console.log(petOwner.address?.house); //undefined
//Note: If you use optional chaining. It can't return you error. It just give you undefined.

//====optional chaining ?.

console.log(petOwner?.food[0]); //apple
console.log(petOwner?.food[5]); //undefined
console.log(petOwner?.food?.papeya?.dib); //undefined