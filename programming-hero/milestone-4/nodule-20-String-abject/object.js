//Primitive data type
//or basic data type
//primary data type
const age = 32;
const school = "Cantonment";
const isPassed = true;
let isDeveloper;

const subjects = ["bangla", "English", "Physics", "Math"];

//object ===> non-primitive data type
const bottle = {
    brand: "apple",
    price: 45,
    color: "white",
    isClean: false,
}

//object ==> non primitive data type
const subject = {
    name: "biology",
    teacher: "tushar sir",
    examDate: "30 Feb",
    chapters: ["first", "second", "third"],
    exam: {
        name: "final exam",
        marks: 100,
    }
}

const car = {
    model: "BMW",
    color: "Black",
    price: 2500000,
    accelerate: function(){
        console.log("গাড়ির গতি বাড়ছে !");
    }
}
 
console.log(car.accelerate());