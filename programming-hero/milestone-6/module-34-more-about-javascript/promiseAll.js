const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
const fetchCOmments = fetch('https://jsonplaceholder.typicode.com/comments')

//Run all fetch requests concurrently
Promise.all([fetchUsers, fetchPosts, fetchCOmments])
.then(responses => {
    //Responses is an array of all the resolved promises
    return Promise.all(responses.map(res => res.json()));
})
.then(data => {
    const [users, posts, comments] = data;
    console.log("Users: ", users);
    console.log("Posts: ", posts);
    console.log("Comments: ", comments);
})

.catch(error => {
    //If any of the promises fail , this will catch the error
    console.error("Error fetching data: ", error);
})