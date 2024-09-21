//Add event listener 
document.getElementById("btn-add-money").addEventListener("click", function(event){
    //prevent auto refreshing
    event.preventDefault();

    //Import data from input field
    const addAmount = document.getElementById("input-add-amount").value;
    const inputPin = document.getElementById("input-pin").value;

    //validation pin number
    if(inputPin === "1234" && addAmount !== ""){
        //Insert current balance
        const currentBalance = document.getElementById("current-balance").innerText;
        
        //convert the string value to number
        const addAmountNumber = parseFloat(addAmount);
        const currentBalanceNumber = parseFloat(currentBalance);

        //Calculate update balance
        const updateBalance = currentBalanceNumber + addAmountNumber;
        
        //add update amount to the main balance
        document.getElementById("current-balance").innerText = updateBalance;
    }
    else{
        alert("Please fill up the requirement");
    }
})