const salary = 24000;
const isBcs = false;
const height = 66;

//------------------
if (salary > 20000) {
    console.log('Supatro');
} else {
    console.log('Onno patro khojo');
}

//------------
if (salary >= 20000 && isBcs) {
    console.log('valo patro');
} else {
    console.log('50% valo');
}

//---------------
if (salary > 20000 && isBcs && height >67) {
    console.log("Number 1");
} else {
    console.log('75% valo');
}

//-----------

if (salary > 20000 || height > 66) {
    console.log('eso baba kobul');
} else {
    console.log('vag tui mokbul');
}

//-----------------------------------------

// const salary = 24000;
// const isBcs = false;
// const height = 66;

if (salary > 20000 && isBcs == true || height > 66 ) {
    console.log('agree');
} else {
    console.log('disagree');
}

//--------------------------------------

// const salary = 24000;
// const isBcs = false;
// const height = 66;

//*************Think it as follow operator precedence *****************
if (salary > 20000 || height > 66 && isBcs == true ) {
    console.log('I AM agree');
} else {
    console.log('I AM disagree');
}

// if (salary > 20000 && height > 66 || isBcs == true ) {
//     console.log('I AM agree');
// } else {
//     console.log('I AM disagree');
// }

//Problem ===> salary > 20000 || height > 66 && isBcs == true