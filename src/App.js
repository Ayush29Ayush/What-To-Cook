import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  //! What is state in React?
  // State is a plain JavaScript object used by React to represent an information about the component’s current situation.It’s managed in the component (just like any variable declared in a function). The difference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React.

  //! useState
  // states are just like objects in Javascript so the below code means that there is an object with counter = 0 and to update that counter a function named setCounter is used.
  const [counter, setCounter] = useState(0);

  //! useEffect
  useEffect(() => {
    console.log("Effect has been run...");
  });

  return (
    <div className="App">
      <h1>Hello Ayush</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <br />
      <h1>Example of useState and useEffect(open console)... </h1>
      <h2 onClick={() => setCounter(counter + 1)}>
        Value of counter = {counter}
      </h2>
      <br />
    </div>
  );
};

export default App;
