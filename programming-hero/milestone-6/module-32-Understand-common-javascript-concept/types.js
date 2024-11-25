//strongly typed Language
//int a = 5;
// string b = 'alim halim khalim';
//bool c = True;
//object student = {name: 'noya daman', id: 55}
//int[] numbers = [12, 45,78];
//string[] fridends = ['abul', 'babul']

//Javascript is a dynamic type Language

//primitive data type(which is contain just one data)
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;

//non-primitive data type(which is contain multiple data )
const ages = [45, 65, 48];
const student = { id: 23, class: 7}
// console.log(typeof a , typeof b,typeof d, typeof ages, typeof student);

//number , string, boolean are primitive data type

let x = 5;
let y = x;
console.log(x, y); //5 5
y = 7;
console.log(x, y); //5, 7

const p = {job: 'web developer'};
let q = p;
console.log(p, q); //{ job: 'web developer' } { job: 'web developer' }

//if i just update a reference not change the main value. it will update the main variable.
q.job = 'front end developer';
console.log(p, q); //{ job: 'front end developer' } { job: 'front end developer' } 
q= {job: 'backend'}
console.log(p, q);  //{ job: 'web developer' } { job: 'backend' }