import React, { Component } from "react";
import hogs from '../porkers_data';
import FilterSort from "./FilterSort";
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

  closeHogDetailHandler = () => {
    // debugger
    this.setState({
      chosenHog: null
    })
  }

  render() {
    return (
      <div>
        <FilterSort />
        { 
         this.state.chosenHog ? 
            <HogDetail chosenHog={this.state.chosenHog} 
                       closeHogDetail={this.closeHogDetailHandler}
            /> 
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
