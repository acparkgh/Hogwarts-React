import React from 'react';
import HogDetail from './HogDetails';


// const HogTile = (props) => {
const HogTile = ({ hog, chooseHog, chosenHog }) => {
  const { name, specialty, greased, weight } = hog;
  const pigName = name.split(' ').join('_').toLowerCase();
  // console.log(pigName)
  const pigImage = require(`../hog-imgs/${pigName}.jpg`);

  return (
    <div className='ui eight wide column pigTile'
         onClick={ () => chooseHog(hog) }
        //  onClick={ props.chooseHog.bind(this, props.hog) }
    >
      <img src={pigImage} alt="a cute pig" />
      <h3>{name}</h3>
    </div>
  );
};

export default HogTile;