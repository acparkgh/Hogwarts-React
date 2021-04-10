import React from 'react';
import hogs from '../porkers_data';
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
  // console.log(filteredHogs)
  
  const displayHogs = filteredHogs.map (hog => 
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