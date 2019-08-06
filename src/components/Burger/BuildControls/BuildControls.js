import React from "react";
import classes from "./BuildControls.module.css";
import BuildContorl from "./BuildControl";
const buildControls = ({
  addIngredient,
  removeIngredient,
  ingredients,
  price,
  disableOrder,
  order
}) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" }
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildContorl
          key={ctrl.label}
          label={ctrl.label}
          onMore={() => addIngredient(ctrl.type)}
          onLess={() => removeIngredient(ctrl.type)}
          disabled={ingredients[ctrl.type] === 0}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={disableOrder}
        onClick={order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
