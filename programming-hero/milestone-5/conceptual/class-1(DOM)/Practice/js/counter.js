//read operation
const count = document.getElementById("count");
const increase = document.getElementsByClassName("increase")[0];
const decrease = document.getElementsByClassName("decrease")[0];

//
// const button1 = document.getElementById("stop");
// button1.addEventListener("click", function(){
//     increase.setAttribute("disabled", true);
//     decrease.setAttribute("disabled", true);

// })

const container = document.getElementById("counter-container");

container.addEventListener("click", function () {
  
  if (increase.hasAttribute("disabled") && decrease.hasAttribute("disabled")) {
    console.log(increase.hasAttribute("disabled"));
    increase.removeAttribute("disabled", true);
    decrease.removeAttribute("disabled", true);
    container.classList.remove("bg-red-400");
    container.classList.add("bg-green-400");
  }
  else{
    increase.setAttribute("disabled", true);
    decrease.setAttribute("disabled", true);
    container.classList.remove("bg-green-400");
    container.classList.add("bg-red-400")
  }
});

// container.addEventListener("click", function () {
//   console.log(increase.getAttribute("disabled"));
//   if (increase.getAttribute("disabled") == null) {
//     increase.setAttribute("disabled", true);
//         decrease.setAttribute("disabled", true);
//         container.classList.add("bg-red-400")
//   }
//   else{
//     increase.removeAttribute("disabled", true);
//         decrease.removeAttribute("disabled", true);
//         container.classList.remove("bg-red-400")
//         container.classList.add("bg-green-400")
//   }
// });

increase.addEventListener("click", function (event) {
  let currentValue = Number(count.innerText);
  currentValue++;
  count.innerText = currentValue;
  event.stopPropagation();
});

decrease.addEventListener("click", function (event) {
  let currentValue = Number(count.innerText);
  currentValue--;
  count.innerText = currentValue;
  event.stopPropagation();
});
