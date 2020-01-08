import React, { Component } from "react";
import locationData from "../locationData.js";
import LocationList from "../components/LocationList";
export default class Location extends Component {
  render = () => {
    return (
      <div className="locations">
        <h1>Locations:</h1>
        <div className="location-list">
          {locationData.map((locationItem, i) => {
            return <LocationList locationItem={locationItem} key={i} />;
          })}
        </div>
      </div>
    );
  };
}
