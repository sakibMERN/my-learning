//Event Handler System 1

onclick = "console.log('I am clicked')";

//Event Handler System 2
//**IMPORTANT! We will use this. */
/* <button onclick="makeRed('green')">Make Red</button> */
function makeRed(color) {
  document.body.style.backgroundColor = `${color}`;
}

//Event Handler System 3

const makePurpleButton = document.getElementById("make-purple");

makePurpleButton.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// Another------------
// 1
const makeBlue = document.getElementById("make-blue");

// 3
makeBlue.onclick = makeBlueBackground;

// 2
function makeBlueBackground() {
  document.body.style.backgroundColor = "blue";
}

//Event Handler system 4

const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//Another ----

const makeBrownButton= document.getElementById("make-brown");

        makeBrownButton.addEventListener("click",function makeBrown(){
          document.body.style.backgroundColor = "brown"
        });

//******system 4 final(Recommended)********

// document.getElementById("make-orange").addEventListener("click", function(){})

document.getElementById("make-orange").addEventListener("click", function(){
  document.body.style.backgroundColor = "orange"
})