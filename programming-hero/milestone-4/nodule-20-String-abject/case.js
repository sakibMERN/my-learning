const school = "RAJ UK Uttara Model School.";

// console.log(school);

//*****using lower case function for convert all upper case string to lower case.****
console.log(school.toLowerCase()); //raj uk uttara model school.

//using upper case function for convert all lower case string to upper case.
console.log(school.toUpperCase()); //RAJ UK UTTARA MODEL SCHOOL.


//*******String is case sensitive.******
const subject = "Chemistry";
const book = "chemistry"


if(subject === book){
    console.log("I am reading book aibar porikkhai fatai felmu.");
}
else{
    console.log("hudai hudai prista ultai ar vat khawar jonno opekkha kori.");
}  //*****hudai hudai prista ultai ar vat khawar  jonno opekkha kori.

//Note: string is case sensitive.

//***Use trim() for remove white space beside the string. */
const drink = "water";
const liquid = "   water";

//don't use trim
if(drink === liquid){
    console.log("pani er nam life.");
}
else{
    console.log("somudrer pani khawa jai na."); //somudrer pani khawa jai na.
}
//use trim 
if(drink.trim() === liquid.trim()){
    console.log("pani er nam life."); //pani er nam life.
}
else{
    console.log("somudrer pani khawa jai na.");
}