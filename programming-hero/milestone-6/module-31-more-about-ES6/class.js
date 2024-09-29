const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 45000 },
  { id: 4, name: "mac", price: 145000 },
];

//has some properties, which is called "method or constructor"
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("le le lenovo");
// console.log(lenovo);
// lenovo.speak("oba kita kow");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("sir is teaching Math");
  }
}

const tapan = new Teacher("Tapan Sir", "Physic");
console.log(tapan);

const rasid = new Teacher("Rasid", "English");
console.log(rasid);
