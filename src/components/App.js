import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import HogContainer from "./HogContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HogContainer />
      </div>
    );
  }
}

export default App;
