/**
 * Single element selector
 */
//Id Selector
const header = document.getElementById("header");
header.style.color = "red"

//Query selector
const uniquePara = document.querySelector("#unique-para");
uniquePara.style.border = "2px solid red";

const another = document.querySelector(".info");



// console.log(another);


/**
 * Multiple element selector
 */

const myTags = document.getElementsByTagName("p");
// for(let i = 0; i < myTags.length; i++){
//     const element = myTags[i];
//     element.style.backgroundColor = "yellowGreen";
//     element.style.fontSize = "40px";
// }




const allClassElement = document.getElementsByClassName("info");


// console.log(allClassElement);


const myParas = document.querySelectorAll(".info");
for(const myTag of myParas){
    myTag.style.backgroundColor = "yellow"
}
// console.log(myParas);