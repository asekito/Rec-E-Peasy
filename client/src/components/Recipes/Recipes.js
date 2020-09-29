import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes", {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.errors) {
          alert(data.errors);
        }
        if (data.body) {
          setRecipes(data.body);
        }
      })
      .catch((err) => {
        alert(err); // Come back and fix error handling
      });
  }, []);

  return (
    <div>
      <h2>Your Recipes</h2>
      <div>
        <button>Add Recipe</button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
