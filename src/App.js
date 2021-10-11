import React, { useEffect } from "react";
import "./App.css";

const App = () => {

  let app_id = process.env.REACT_APP_CLIENT_ID;
  let app_key = process.env.REACT_APP_CLIENT_KEY;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`
    );
    // Converting response to json for ease
    const data = await response.json();
    console.log(response);
    console.log(data);
  };

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
