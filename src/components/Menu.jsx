import React, { Component } from "react";
import pizzaData from "../pizzaData";
import MenuItem from "./MenuItem";
export default class Menu extends Component {
  render = () => {
    return (
      <div className="menu">
        <h1>Menu</h1>

        <div className="menu-container">
          {pizzaData.map((menuItem, i) => {
            return <MenuItem menuItem={menuItem} key={i} />;
          })}
        </div>
      </div>
    );
  };
}
