//login functionality 

//add event listener when login button clicked
document.getElementById("btn-login").addEventListener("click", function(event){
    //stop auto refreshing page
    event.preventDefault();

    //collect value from input field
    const phoneNumber = document.getElementById("input-phone-number").value;
    console.log(phoneNumber);

    const pinNumber = document.getElementById("input-pin").value;
    console.log(pinNumber);

    //Validation pin and phone number
    if(phoneNumber === "01990030303" && pinNumber === "1234"){
        window.location.href = "./file/home.html";
    }
    else{
        alert("Incorrect Phone or Pin number. Try again!")
    }
});