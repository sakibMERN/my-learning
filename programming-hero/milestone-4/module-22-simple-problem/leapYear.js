function isLeapYear (year) {
    if(year % 4 === 0){
        return "This is leap year."
    }
    else{
        return "This is normal year."
    }
}

const LeapYear = isLeapYear(2024);
console.log(LeapYear);

/***
 * 1. Those year that is not devisable by 100 and if the year is devisable by 4.Than it will be a leap year.
 * 2. If the year is devisable by 400 then it is a leap year.
 * 3. else it is not a leap year.
 */

function isLeapYear2(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const LeapYear2 = isLeapYear2(2000);
console.log(LeapYear2); //true

const LeapYear3 = isLeapYear2(1900);
console.log(LeapYear3);  //false

const LeapYear4 = isLeapYear2(2100);
console.log(LeapYear4);  //false

const LeapYear5 = isLeapYear2(2400);
console.log(LeapYear5);  //true