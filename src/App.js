import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SplashImage from "./components/SplashImage";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Navbar />
          <SplashImage />
          <Description />
          <Menu />
          <Contact />
        </h1>
      </div>
    );
  }
}

export default App;
