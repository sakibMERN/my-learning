// const names = ['abdul kasem', 'kuddus mia', 'mokabber hosain'];

// const name1 = names[0];
// const name2 = names[1];
// const name3 = names[2];

// console.log(name2); //mokabber hosain

//we can make this things more easy using array destructuring.

const names = ['abdul kasem', 'kuddus mia', 'mokabber hosain'];

// const [x, y, z] = names;
// console.log(x); //abdul kasem
// console.log(y); //kuddus mia
// console.log(z); //mokabber hosain

//Note: you have to maintain sequence when you use array destructuring.

// const [x] = names;
// console.log(x); //abdul kasem

//if you want to skip any sequence of this . you have to use comma(,) or underscore(_).
// const [x, ,z] = names;
// console.log(x); //abdul kasem
// console.log(z); //mokabber hosain

// const [_, y,__] = names;
// console.log(y); //kuddus mia
//Note: we can't use single underscore in two times. because here underscore behavior is like a variable. and javascript doesn't accept same variable. so we have to use different one.

const [ , , z] = names;
console.log(z); //mokabber hosain