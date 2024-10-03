function checkAge(){
    const ageField = document.getElementById("age")
    const ageText = ageField.value;
    const errorField = document.getElementById("error")
    console.log(ageText);
    
    
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log("age not found", age , ageText);
            throw "please enter a valid number"
        }
        else if( age < 18){
            throw "baccha kaccha not allow"
        }
        else if(age > 30){
            throw "murubbi murubbi"
        }
        errorField.innerHTML = "";
    }
    catch(err){
        console.log("Error:" ,err);
        errorField.innerHTML = "Error: " + err;
    }
    finally{
        console.log("all done inside try catch");
    }
    console.log(11111);
}