const ulTag = document.getElementById("nav-container");
const listItems =ulTag.getElementsByTagName("li");

let lastClick = null;

for(let singleListItem of listItems){
    singleListItem.addEventListener("click", function(){
console.log(lastClick);
        if(lastClick == null){
            singleListItem.style.backgroundColor = "red";
            singleListItem.style.color = "white";
            lastClick = singleListItem;
        }
        else{
            //remove style from last li
            lastClick.style.backgroundColor =  "transparent";
            lastClick.style.color = "black";

            singleListItem.style.backgroundColor = "red";
            singleListItem.style.color = "white";
            lastClick = singleListItem;
        }
        
    })
}