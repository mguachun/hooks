import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
    <h1>Counter:</h1>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
//we use destructuring to import useState 
//useState always returns an array with two values
//useState must be called in top level of function
//useState only work in order they are written
//only work in functionial components