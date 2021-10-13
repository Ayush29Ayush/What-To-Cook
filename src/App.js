import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  let app_id = process.env.REACT_APP_CLIENT_ID;
  let app_key = process.env.REACT_APP_CLIENT_KEY;

  //! State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

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

  const updateSearch = (e) => {
    // Thus e.target.value is the value property of some DOM element, in this case that means the text entered in the search input.
    console.log(e.target.value)
    setSearch(e.target.value);
    // console.log(search)

  };

  return (
    <div className="App">
      <h1>Hello Ayush</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map((xyzrecipe) => (
        <Recipe
          // Unique Key is provided so that it is easy to address a particular part
          key={xyzrecipe.recipe.label}
          title={xyzrecipe.recipe.label}
          calories={xyzrecipe.recipe.calories}
          image={xyzrecipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
