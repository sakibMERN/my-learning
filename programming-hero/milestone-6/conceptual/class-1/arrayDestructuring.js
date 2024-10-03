const names = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];

const name1 = names[0];
const name2 = names[1];
const name3 = names[2];
// console.log(name2); //kuddus mia

//***You can get it more easier way to use array destructuring */

const [x, y, z] = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];
console.log(x); //abdul kasem
console.log(y); //kuddus mia
console.log(z); //mobarok hossain
//Note: You have to maintain the index sequence.

const [a] = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];

console.log(a); //abdul kasem
//you can set any times of variable. your variables are work accordingly. 

const [b, c, d, e, f] = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];
console.log(b); //abdul kasem
console.log(f); //undefined
//Note: if your variable value doesn't exist, you get the result undefined.


const [aa, _, cc] = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];

console.log(aa, cc); //mobarok hossain
//Note: You can skip any variable to use "_ " or ",".

//You can skip more than one.
const [, , ccc] = ['abdul kasem', 'kuddus mia', 'mobarok hossain'];
console.log(ccc); //mobarok hossain
