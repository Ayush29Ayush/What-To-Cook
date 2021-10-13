import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  let app_id = process.env.REACT_APP_CLIENT_ID;
  let app_key = process.env.REACT_APP_CLIENT_KEY;

  //! State
  const [recipes, setRecipes] = useState([]);

  //! useEffect
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`
    );
    // Converting response to json for ease
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    // console.log(data.hits);

    //! Setting recipes from empty array[] to an array containing data.hits using function named setRecipes
    setRecipes(data.hits);
    console.log(data.hits);
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
      {recipes.map((xyzrecipe) => (
        <Recipe
          title={xyzrecipe.recipe.label}
          calories={xyzrecipe.recipe.calories}
          image={xyzrecipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
