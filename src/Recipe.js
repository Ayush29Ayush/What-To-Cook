import React from "react";
import style from "./recipe.module.css";

// const Recipe = (props) => {
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      {/* <h1>Title</h1> */}
      <h1>{title}</h1>
      <ol>
        {ingredients.map((xyzingredient) => (
          <li>{xyzingredient.text}</li>
        ))}
      </ol>
      {/* <p>Calories</p> */}
      <p>Calories = {calories}</p>
      <img src={image} alt="" className={style.image} />
    </div>
  );
};

export default Recipe;
