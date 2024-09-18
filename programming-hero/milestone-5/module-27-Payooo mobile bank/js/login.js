//form submit reloading the page.

//Step-1: Set event handler
document.getElementById("button-login").addEventListener("click", function(event){

    //Step-2: Stop refreshing current page
    // e.preventDefault(); or
    event.preventDefault(); //it use for stop refreshing the current page.
    // console.log("Login Button Clicked");

    //Step-3: Get the phone number & pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber.value ,pinNumber.value);

    //Step-4: Validate Phone and Pin number
    //This is temporary. You should not do this at your professional field
    if(phoneNumber === "01936031533" && pinNumber === "1234"){
        return console.log("You are login.");
        //Step-5: Allow user to login
    }
    else{
        alert("Wrong phone number or pin");
    }

    

})