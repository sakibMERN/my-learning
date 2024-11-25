import { useState } from "react";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

import "./App.css";


function App() {
  const actors = ["sakib", "Soriful Raj", "Jasim", "Rubel", "Salman Shah"];

  const singers = [
    {id: 1, name: "Dr. Mahafuzur Rahman" , age: 68},
    {id: 2, name: "Eva Rahman", age: 38},
    {id:3, name: "Suvro dev", age: 58},
    {id: 4, name: "Pritom", age: 28},
  ]

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150},
  ]


  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      <h3>Hi! I am learning react.</h3>
      {
        singers.map(singer => (<Singer singer={singer}></Singer>))
      }
      {/* <Actor name="Bappa Raz"></Actor> */}
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="core concepts" isDone={false}></Todo>
      <Todo task="try jsx" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="20000"></Device>
      <Device name="watch" price="1500"></Device>

      <Person />
      <Student grade="7" score="99"></Student>
      <Student grade= '12' score= '25'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

//props comes from property
function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device: {props.name}, price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name} with age:{age + money}
    </h3>
  );
}
/**
 * props = {grade: '7', score: '99'}
 * const {grade, score} = {grade: '7', score: '99'};
 */
function Student({ grade = 1, score = 0 }) {
  // console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student.</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      {/* OR */}
      {/* <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '10px'
    }}> */}
      <h5>debu debu</h5>
      <p>coding:</p>
    </div>
  );
}

export default App;
