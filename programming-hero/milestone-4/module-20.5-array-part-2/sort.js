const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];

const sortedPerson = persons.sort();
console.log(sortedPerson);


/**
 * ascending -->>> smaller to larger: [2,3,4,6,7,8,];
 * descending -->>> larger to smaller: [8,7,6,4,3,2]
*/
const numbers = [2,4,8,7,9,3];

const number_asc = numbers.sort();
console.log(number_asc);

//if the number will single digit(ex- [2,4,8,7,9,3]). it will be provide perfect result.(ex-[ 2, 3, 4, 7, 8, 9 ]);



/**
 * but!!!!!!!!!!
 * if the number is more than single digit . it will not provide you perfect result. 
 */

const mixedNumber = [32,43,54,23,54,43,2];
const sortNumber = mixedNumber.sort();
console.log(sortNumber);  //[2, 23, 32, 43,43, 54, 54];====>>> this is not perfect.

/**
 * the reason of the disaster is, more digits number follow "ASCII-Binary Character Table" rule
 * It compare upper case character first. then the small letter. 
 */

const persons1 = ['rakib', 'Nokib', 'sakib', 'akib', 'Fakib'];

const sortedPerson1 = persons1.sort();
console.log(sortedPerson1);  //[ 'Fakib', 'Nokib', 'akib', 'rakib', 'sakib' ]

// ===>>>>> Look the result compare uppercase at first .and then compare alphabetical rule 