import React, { Component } from "react";

export default class LocationList extends Component {
  render = () => {
    return (
      <div className="location">
        <p>{this.props.locationItem.name}</p>
        <strong>Address:</strong>
        <p>{this.props.locationItem.address}</p>
        <strong>Phone:</strong>
        <p>{this.props.locationItem.phone}</p>
      </div>
    );
  };
}
