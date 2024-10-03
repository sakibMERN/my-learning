const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error happened", error));
};

const loadComments2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
    const commentContainer1 = document.getElementById("comment-container1");
    for (const comment of data) {
      const div = document.createElement("div");
      div.classList.add("comment");
      div.innerHTML = `
    <h3>User name: ${comment.name}</h3>
    <p>Email: ${comment.email}</p>
    <p>Comment: ${comment.body}</p>
    `;
      commentContainer1.appendChild(div);
    }
  } catch (error) {
    console.error("data load error");
  }
};

const loadComments3 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    const commentContainer2 = document.getElementById("comment-container2")

    for(const comment of data){
        const div = document.createElement("div");
    div.classList.add("comment2");
    div.innerHTML = `
    <h3>User name: ${comment.name}</h3>
    <p>Email: ${comment.email}</p>
    <p>Comment: ${comment.body}</p>
    `;
    commentContainer2.appendChild(div);
    }
  } catch (error) {
    console.error("error found", error);
  }
};
