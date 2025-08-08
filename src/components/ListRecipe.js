import React, { useState } from "react"

import data from "./data/recipes";

import Recipe from "./Recipe";
import ListTitle from "./ListTitle";

export default function ListRecipe() {
  const [recipes, setRecipes] = useState(data);

  return (
    <div>
      <ListTitle sid="recipe" data={data} setItems={setRecipes} />
      <div className="list">
        {recipes.map((recipe) => <Recipe key={recipe.pid} recipe={recipe} />)}
      </div>
    </div>
  )
}
