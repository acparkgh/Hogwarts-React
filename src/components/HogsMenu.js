import React from 'react';
import hogs from '../porkers_data';
import HogTile from './HogTile';

const HogsMenu = (props) => {

  const displayHogs = props.hogs.map (hog => 
                        <HogTile hog={hog} key={hog.name}
                                 chooseHog={props.chooseHog}
                        /> 
  );
  
  return (
    <div className='ui grid container'>
      {/* { hogs.map( hog => <HogTile hog={hog} key={hog.name} /> ) } */}
      {displayHogs}
    </div>
  )

};

export default HogsMenu;