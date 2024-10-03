/**
 * Practice Task-3
 * Write an async/await function that fetch data from an api and logs a message.
 * input: https://v2.jokeapi.dev/joke/Programming?type=single
 */

const showMessage = async () => {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    if(!res.ok){
        throw "Your api is not correct";
        
    }
    const data = await res.json();
    console.log(data.joke);
    
  } catch (err) {
    console.log("Error found: ", err);
  }
  finally{
    console.log("All job done");
  }
};

showMessage();