// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

/**
 * This code is using the fetch API in JavaScript to make a request to a server and get some data. Let's break it down step by step:

fetch('https://jsonplaceholder.typicode.com/todos/1'):

fetch is a function that makes an HTTP request (in this case, a GET request).
The URL provided, https://jsonplaceholder.typicode.com/todos/1, is an example endpoint that returns a specific "to-do" item in JSON format. This URL is part of a fake online REST API often used for testing and learning.
.then(response => response.json()):

The fetch function returns a promise. A promise represents an action that may take some time to complete (like requesting data from the server), and once it's done, it gives back a result.
The first .then() block takes the response object (which represents the response from the server) and calls response.json(). This is a method that reads the response and parses it into JSON format.
This step converts the raw response data into something JavaScript can work with (a JavaScript object).
.then(json => console.log(json)):

The second .then() block gets the parsed JSON data (now a JavaScript object) and does something with it.
In this case, console.log(json) simply prints the result to the console so you can see the data.
So overall, this code:

Requests a to-do item from the server.
Converts the server's response to a JavaScript object.
Prints that object to the console.
Example output might look like this:

json
Copy code
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
Let me know if you'd like more clarification!
 */
