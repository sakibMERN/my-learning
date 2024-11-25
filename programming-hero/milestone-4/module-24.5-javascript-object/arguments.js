function add(num1, num2){
    console.log(num1,num2);

    //I can console arguments just inside function
    console.log(arguments); //[Arguments] { '0': 12, '1': 13, '2': 14, '3': 15 }<<===== this is array like object

    // you can find specific element inside arguments 
    console.log(arguments[2]);  //14
}
add(12, 13, 14, 15);