// const Math = {
//     min: function min(num1,num2){
//         return num2;
//     }
// }

// console.log(Math.min);

// Find the lowest value of these number 
const min = Math.min(45,5,25,65,24,58,3,-88);
console.log(min);

// Find the highest value of these number
const max = Math.max(45,5,25,65,24,58,3,-88,99);
console.log(max);

console.log(Math.PI.toFixed(2));

console.log(Math.abs);


/**
 * Math.abs()==> কোনও সংখ্যার পূর্বে (+) বা (-) যা ই থাকুক না কেন, উক্ত সংখ্যার পার্থক্য বের করা যায়।
 */
console.log(Math.abs(50-10));

/**
 * Math.round()==>> কোনও দশমিক যুক্ত সংখ্যাকে পূর্ণ সংখ্যায় রুপান্তরিত করে।।
 */
console.log(Math.round(4.4));  //4
console.log(Math.round(5.5));  //6
console.log(Math.round(6.9));  //7

/**
 * Math.floor()==>কোনও দশমিক সংখ্যা যেটা থাকবে, তার থেকে দশমিক অংশ বাদ দেওয়া জন্য ব্যাবহার করা হয়।
 */

console.log(Math.floor(9.88));  //9
console.log(Math.floor(3.22));  //3


/**
 * Math.ceil()==>কোনও দশমিক সংখ্যা যেটা থাকবে, তার থেকে দশমিক অংশ বাদ দিয়ে পরের সংখ্যায় রূপান্তরিত হবে।
 */

console.log(Math.ceil(9.12));  //10
console.log(Math.ceil(4.88));  //5


/**
 * Math.random()==> random সংখ্যা generate করার জন্য এটি বাবহার করা হয়।
 */

console.log(Math.random());

//এই পদ্ধতিতে ১০ এর মধ্যে সংখ্যা দেখাবে।
console.log(Math.random()*10);

//এই পদ্ধতিতে মান যা আসুক না কেন , সেটাকে পূর্ণ সংখ্যায় রুপান্তরিত করবে।
console.log(Math.round(Math.random()*10));


/**
 * লটারি নির্ণয় কর।
 */