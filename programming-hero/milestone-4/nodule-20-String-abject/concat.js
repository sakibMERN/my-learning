const first = "Abid";
const middle = "Hasan";
const last = "Nabid";


// const fullName = first + last;
// console.log(fullName); //AbidNabid

const fullName = first + " " + last;
console.log(fullName); //Abid Nabid

//**concat()==> using concat method for add two string.

const fullName2 = first.concat( last);

console.log(fullName2); //AbidNabid

const fullName3 = first.concat(" ").concat(middle,last);

console.log(fullName3); //Abid Nabid

const fullName4 = first.concat(" ").concat(middle,last);

console.log(fullName4);  //Abid HasanNabid