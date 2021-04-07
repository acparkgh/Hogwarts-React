import React, { Component } from "react";
import hogs from '../porkers_data';
import HogDetail from "./HogDetails";
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

  chooseHogHandler = (clickedHog) => {
    this.setState({
      chosenHog: clickedHog
    })
  }

  render() {
    return (
      <div>
        { 
         this.state.chosenHog ? 
            <HogDetail chosenHog={this.state.chosenHog} /> 
             :
            <HogsMenu hogs={hogs} 
                      chooseHog={this.chooseHogHandler}
            />
        }
      </div>
    );
  }
}

export default HogContainer;
