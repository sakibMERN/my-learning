import "./App.css";
import Post from "./Posts";
import Posts from "./Posts";

function App() {
  return (
    <>
      <div>
        <h3>React core concepts</h3>
        <ol>
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>Load</li>
        </ol>
        <hr />
        <Posts></Posts>
        <Post></Post>
      </div>
    </>
  );
}

export default App;
