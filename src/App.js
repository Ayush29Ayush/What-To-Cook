import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  let app_id = process.env.REACT_APP_CLIENT_ID;
  let app_key = process.env.REACT_APP_CLIENT_KEY;

  //! State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken') // this will be the term used for getting recipes from server and will only be activated when search button is clicked.

  //! useEffect
  // useEffect(() => {
  //   getRecipes();
  // }, []);
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    // const response = await fetch(
    //   `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`
    // );
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
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
    // console.log(e.target.value)
    setSearch(e.target.value);
    // console.log(search)

  };

  const getSearch = (e) => {
    e.preventDefault(); // prevents from refreshing the page on submitting
    setQuery(search);
    setSearch(''); // after setting the query , again setting search to blank , since it will be reflected in the UI.
  }

  return (
    <div className="App">
      <h1>Hello Ayush</h1>
      <form className="search-form" onSubmit={getSearch}>
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
          ingredients={xyzrecipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
