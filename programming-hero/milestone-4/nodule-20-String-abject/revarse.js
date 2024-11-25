// reverse ==>
    
    const sentence = "I am learning dev."
    let reverse = "";

    //for-of loop
    for (const letter of sentence){
        // console.log(letter); 
        reverse = letter + reverse;

    }

    console.log(reverse); //.ved gninrael ma I

    //for loop

    let rev = "";
    for(let i = 0; i < sentence.length; i++){
        // console.log(i); //show index
        console.log(sentence[i]);
        const letter = sentence[i];
        rev = letter + rev;
    }
    console.log(rev); //.ved gninrael ma I

    //shortcut way

    const reversed = sentence.split('').reverse().join("");
    console.log(reversed); //.ved gninrael ma I

