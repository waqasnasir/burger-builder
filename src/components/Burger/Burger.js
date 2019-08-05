import React from "react";
import BurgerIngredient from "./BurgerIngredient";
import classess from "./Burger.module.css";
import propTypes from "prop-types";

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map((_, index) => (
        <BurgerIngredient type={igKey} key={igKey + index} />
      ))
    )
    .reduce((arr, el) => [...arr, ...el], []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={classess.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: propTypes.object
};

export default burger;
