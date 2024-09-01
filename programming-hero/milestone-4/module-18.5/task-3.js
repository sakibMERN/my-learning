/***
 * 
 * 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

const books = ["PHP book", "Javascript book", "Python book", "Java book"];


if(books.includes("Javascript book")) {
    console.log("Your book price is 500tk.");
}
else{
    console.log("Sorry , your book is not found.");
}
// console.log(books.includes("Javascript book"));