import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form>
        {Object.keys(ingredients).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="answer-space">{inputs[category]}</div>
            <RecipeChoices
              handleChange={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
              label={category}
              choices={ingredients[category]}
              checked={inputs[category]}
            />
          </div>
        ))}
        <button type="submit" className="button submit">
          Check Answer
        </button>
        <button type="button" className="button new-drink-button">
          New Drink
        </button>
      </form>
    </div>
  );
};

export default BaristaForm;
