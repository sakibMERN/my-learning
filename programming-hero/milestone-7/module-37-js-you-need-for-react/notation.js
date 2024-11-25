const person = {
    name: 'lal mia',
    profession: "Traffic surgeon",
    age: 39,
    25: "summer",
    'son-name': 'sunny',
    address: 'sahabag'
}

//dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person['profession'];
// Note: you have to set property inside quotation.because brackets notation get's string value;

const pName = "profession";
const prof3 = person[pName];
console.log(prof3);

//if property name is numeric, you can't get it by dot notation. you have to use bracket notation.
const season = person[25];
console.log(season);

//if property name is using hyphen(-), you can't get it by dot notation. you have to use bracket notation.
const son = person["son-name"];
