import React, { Component } from "react";
import hogs from '../porkers_data';
import HogsMenu from "./HogsMenu";

class HogContainer extends Component {
  constructor() {
    super()
    this.state = {
      greaseFilter: 'all',
      sortType: 'none',
      chosenHog: null,
    }
  }

  render() {
    return (
      <div>
        <h1>Hogs Container</h1>
        <HogsMenu hogs={hogs} />
        
      </div>
    );
  }
}

export default HogContainer;
