function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = "Halim mama";

// const number = [45, 54, 78];

// const laptop = {
//     price: 45000,
//     brand: "lenovo",
//     memory: "8gb"
// }

function greetingHandler(name){
    console.log("good morning", name);
}
function greetEvening(name){
    console.log("good evening", name);
}
function greetNight(name){
    console.log("good night", name);
}
greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruse");
greeting(greetEvening, "Tom Solaiman");
greeting(greetEvening, "Tom Salman");
greeting(greetNight, "Rasel")