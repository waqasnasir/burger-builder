import React, { Fragment } from "react";
import Button from "../../UI/Button";

const orderSummary = ({
  ingredients = {},
  cancelPurchase,
  continuePurchase,
  price
}) => {
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
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} onClick={cancelPurchase}>
        CANCEL
      </Button>
      <Button btnType={"Success"} onClick={continuePurchase}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
