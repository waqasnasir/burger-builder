import React, { Fragment } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.7,
  meat: 1.7,
  cheese: 0.9
};

const INITIAL_BURGER_PRICE = 4;

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: INITIAL_BURGER_PRICE
  };

  addIngredient = type => {
    this.setState(prevState => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1
      },
      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
    }));
  };

  removeIngredient = type => {
    // only remove if previous ingredient is greater than 0
    this.state.ingredients[type] > 0 &&
      this.setState(prevState => ({
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] - 1
        },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }));
  };

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={ingredients} />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          ingredients={ingredients}
          price={totalPrice}
          disableOrder={totalPrice === INITIAL_BURGER_PRICE}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
