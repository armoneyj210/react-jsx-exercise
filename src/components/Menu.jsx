import React, { Component } from "react";
import MenuItem from './MenuItem'
export default class Menu extends Component {
  render() {
    return <div className="menu">
    <h1>Menu</h1>
    </div>
    <div className="menu-container">
        <div className="menu-list">
            <div className="menu-item">
                <img src={this.props.image} alt="pizza image"/>
            </div>
            <div className="menu-description">
                <div className="menu-item-name">
                    {this.props.name}
                </div>
                <div>
                    <strong>Price:</strong>
                    <p>{this.props.price}</p>
                </div>
                <div>
                  <p>  {this.props.description}</p>
                </div>
            </div>
        </div>
    </div>
   
  }
}
