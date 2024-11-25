

const p = document.createElement('p');

p.innerHTML = "I love programming";

document.getElementById("append").appendChild(p);


const paragraphs = document.querySelectorAll(".same p");

for(let item of paragraphs){
    console.log(item.innerHTML);
    item++;
}

