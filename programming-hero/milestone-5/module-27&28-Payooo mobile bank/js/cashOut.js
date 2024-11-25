//add event listener
document.getElementById("btn-cash-out").addEventListener("click", function(event){
    //prevent auto refreshing
    event.preventDefault();

    //get input string data
    const inputCashOut = document.getElementById("input-cash-out-amount").value;
    const inputPin = document.getElementById("input-cash-out-pin").value;

    //Pin validation
    if(inputPin === "1234" && inputCashOut !== ""){
        //get current balance
        const currentBalanceInput = document.getElementById("current-balance").innerText;

        //convert string data to number
        const cashOutNumber = parseFloat(inputCashOut);
        const currentBalanceNumber = parseFloat(currentBalanceInput);

        const updateBalance = currentBalanceNumber - cashOutNumber;

        //push the current balance into the available balance
        document.getElementById("current-balance").innerText = updateBalance;
    }
    else{
        alert("Something wrong! Please try again.");
    }
})