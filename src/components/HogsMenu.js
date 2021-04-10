import React from 'react';
import HogTile from './HogTile';

const HogsMenu = (props) => {

  let filteredHogs = []; 
    switch (props.greasedHog) {
      case "greased":
        filteredHogs = [ ...props.hogs.filter( hog => hog.greased ) ];
        break;
      case "ungreased":
        filteredHogs = [ ...props.hogs.filter( hog => !hog.greased ) ];
        break;    
      default:
        filteredHogs = [ ...props.hogs ];        
        break;
      }
 
  // let sortedHogs = [];
  //   switch (props.sortHog) {
  //     case "weight":
  //       sortedHogs = [ ...filteredHogs.sort( (a, b) => a.weight - b.weight ) ];
  //       break;
  //     case "name":
  //       sortedHogs = [ ...filteredHogs.sort( (a, b) => a.name < b.name ? -1 : 1 ) ];  
  //       break;
  //     default:
  //       sortedHogs = [ ...filteredHogs ];
  //       break; 
  // }
  const sortedHogs = () => {
    switch (props.sortHog) {
      case "weight":
        return [ ...filteredHogs.sort( (a, b) => a.weight - b.weight ) ];
      case "name":
        return [ ...filteredHogs.sort( (a, b) => a.name < b.name ? -1 : 1 ) ];  
      default:
        return [ ...filteredHogs ];
         
    }
  }  
  // console.log(sortedHogs())      
  // const displayHogs = sortedHogs.map (hog => 
  const displayHogs = sortedHogs().map (hog => 
                        <HogTile hog={hog} key={hog.name}
                                 chooseHog={props.chooseHog}
                        /> 
  );

  return (
    <div className='ui grid container'>
      {displayHogs}
    </div>
  )

};

export default HogsMenu;