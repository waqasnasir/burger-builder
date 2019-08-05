import React, { Fragment } from "react";
import Burger from "../../components/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0
    }
  };
  render() {
    const { ingredients } = this.state;
    return (
      <Fragment>
        <Burger ingredients={ingredients} />
        <div>Builder controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
