import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello Ayush</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
