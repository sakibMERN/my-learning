//Select element using tag name.
const allLi = document.getElementsByTagName("li");
console.log(allLi);

//Select element using class name
const allTitle = document.getElementsByClassName("section-title");
console.log(allTitle);

//Select element using id 
const secondSection = document.getElementById("second-section");

console.log(secondSection);
    //add style
    secondSection.style.color = "red";
    secondSection.style.backgroundColor = "green"
    secondSection.style.fontSize = "39px";


//Select element by using querySelector(first matching)
// document.querySelector();

//Select element by using querySelectorAll
// document.querySelectorAll();

/**
 * Add new element in a section or append new section inside the pages
 */

const addItem = document.getElementById("second-list");

const li = document.createElement("li");
li.innerText = "new item";
console.log(li);
addItem.appendChild(li)

    //add new section inside main

    const addSection = document.getElementById("main-container");
    
    const section = document.createElement("section");
    section.innerHTML= `
    <h1>Section Title-4</h1>
    <ul>
        <li>List Item - 1</li>
        <li>List Item - 2</li>
        <li>List Item - 3</li>
        <li>List Item - 4</li>
    </ul>
    `;

    addSection.appendChild(section);