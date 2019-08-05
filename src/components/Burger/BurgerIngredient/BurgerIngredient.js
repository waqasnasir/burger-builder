import React from "react";
import classess from "./BurgerIngredient.module.css";
import propTypes from "prop-types";

const BurgerIngredient = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case "bread-bottom":
      ingredient = <div className={classess.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classess.BreadTop}>
          <div className={classess.Seeds1} />
          <div className={classess.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classess.Meat} />;
      break;
    case "cheese":
      ingredient = <div className={classess.Cheese} />;
      break;
    case "salad":
      ingredient = <div className={classess.Salad} />;
      break;
    case "bacon":
      ingredient = <div className={classess.Bacon} />;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredient;
