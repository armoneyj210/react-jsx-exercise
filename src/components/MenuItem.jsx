import React, { Component } from "react";
import pizzaData from "../pizzaData.js";
const pizza = pizzaData;
export default class MenuItem extends Component {
  render() {
    <div>
      {pizza.map((spec, i) => {
        return <pizzaData spec={spec} key={i} />;
      })}
    </div>;
  }
}
