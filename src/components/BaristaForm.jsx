import React, { useState } from "react";

const BaristaForm = () => {
  const onNewDrink = () => {};
  const onCheckAnswer = () => {};

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <form>
        <button type="submit" className="button submit" onClick={onCheckAnswer}>
          Check Answer
        </button>
        <button type="button" className="button new-drink-button" onClick={onNewDrink}>
          New Drink
        </button>
      </form>
    </div>
  );
};

export default BaristaForm;
