import React, { Fragment } from "react";

const orderSummary = ({ ingredients = {} }) => {
  const burgerIngredients = Object.keys(ingredients).map(igKey => (
    <li>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
      {ingredients[igKey]}
    </li>
  ));
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{burgerIngredients}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default orderSummary;
