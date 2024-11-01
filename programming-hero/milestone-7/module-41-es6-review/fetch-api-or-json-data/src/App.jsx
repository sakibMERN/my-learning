import { useEffect, useState } from "react";
import "./App.css";
import Sunglass from "./components/Sunglass/Sunglass";
import Watch from "./components/Watch/Watch";

function App() {

  const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // },[])
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/sakibMERN/watches-data/refs/heads/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   { id: 1, name: "Apple watch", price: 200 },
  //   { id: 2, name: "Samsu watch", price: 200 },
  //   { id: 3, name: "MI watch", price: 200 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     price: 399.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 349.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense 2",
  //     price: 299.95,
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 3",
  //     price: 399.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     price: 199.99,
  //   },
  // ];

  return (
    <>
      <Sunglass></Sunglass>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
