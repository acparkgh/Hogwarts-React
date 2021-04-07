import React from 'react';

const HogTile = (props) => {
  const { name, specialty, greased, weight } = props.hog;
  const pigName = name.split(' ').join('_').toLowerCase();
  // console.log(pigName)
  const pigImage = require(`../hog-imgs/${pigName}.jpg`);
  return (
    <div className='ui eight wide column pigTile'>
      <img src={pigImage} alt="a cute pig" />
      <h3>{name}</h3>
          
    </div>
  );
};

export default HogTile;