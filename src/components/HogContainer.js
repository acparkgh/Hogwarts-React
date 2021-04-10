import React, { Component } from "react";
import hogs from '../porkers_data';
import FilterSort from "./FilterSort";
import HogDetail from "./HogDetails";
import HogsMenu from "./HogsMenu";

class HogContainer extends Component {
  constructor() {
    super()
    this.state = {
      greasedFilter: 'all',
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

  updateGreasedFilterHandler = (event) => {
    // debugger
    this.setState({
      greasedFilter: event.target.value
    })
  }

  updateSortHandler = (event) => {
    // debugger
    this.setState({
      sortType: event.target.value
    })
  }

  render() {
    return (
      <div>
        <FilterSort updateGreasedFilter={this.updateGreasedFilterHandler}
                    updateSort={this.updateSortHandler} 
        />
        { 
         this.state.chosenHog ? 
            <HogDetail chosenHog={this.state.chosenHog} 
                       closeHogDetail={this.closeHogDetailHandler}
            /> 
             :
            <HogsMenu hogs={hogs} 
                      chooseHog={this.chooseHogHandler}
                      greasedHog={this.state.greasedFilter}
                      sortHog={this.state.sortType}
            />
        }
      </div>
    );
  }
}

export default HogContainer;
