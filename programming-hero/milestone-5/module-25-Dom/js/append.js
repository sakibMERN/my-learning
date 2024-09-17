//Step-1(where to added)
const placesList = document.getElementById("places-list");

//Step-2(what to added)
const newPlace = document.createElement("li");
newPlace.innerText = "Cox-Bazar";

//Step-3(add the child)
placesList.appendChild(newPlace);

//*********adding a new section******

//Step-1====>>>>>where to add
const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);

//Step-2====>>>> what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");

const li2 = document.createElement("li");

const li3 = document.createElement("li");

const li4 = document.createElement("li");

//insert content inside the "li"
li1.innerText = "Meat";
li2.innerText = "Begun Vaji";
li3.innerText = "alu vorta";
li4.innerText = "elish mach";

//append "li" inside the "ul"
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

//append "ul" inside the "section"
section.appendChild(ul);

console.log(section);

//append "section" inside the "main section"
mainContainer.appendChild(section);


//=======>>>>>> Another method to create a new section.

const sectionDress = document.createElement("section");

//set inner html directly
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>lungi</li>
    <li>Sandogenji</li>
    <li>shirt</li>
</ul>
`;

//append "section" inside the "main"
mainContainer.appendChild(sectionDress);


