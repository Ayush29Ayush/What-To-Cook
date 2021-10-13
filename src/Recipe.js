import React from "react";

// const Recipe = (props) => {
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      {/* <h1>Title</h1> */}
      <h1>{title}</h1>
      <ol>
        {ingredients.map(xyzingredient => (
          <li>{xyzingredient.text}</li>
        ))}
      </ol>
      {/* <p>Calories</p> */}
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
