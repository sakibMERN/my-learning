//add event listener
document.getElementById("input-add-money").addEventListener("click", function(){
    document.getElementById("cash-out-container").classList.add("hidden");
    document.getElementById("add-money-container").classList.remove("hidden");
    
});

document.getElementById("input-cash-out").addEventListener("click", function(){
    document.getElementById("add-money-container").classList.add("hidden");
    document.getElementById("cash-out-container").classList.remove("hidden");
})