import { useState } from "react";
import "./State.css"

export default function State() {
  const [state, setState] = useState(0);
  let storageVar = 0;
  const handleVariable = () => {
    storageVar = storageVar + 1;
    console.log(storageVar);
  }

  const handleState = () => {
    setState(state + 1);
    console.log(state);
  }

  return (
    <>
      <div>
        <h1>This is State count: {state}</h1>
        <h1>This is Variable count: {storageVar}</h1>
      </div>

      <button onClick={handleState} className="hero">Change State Count</button>
      <button onClick={handleVariable} className="hero">Change Variable Count</button>

      
    </>
  );
}
