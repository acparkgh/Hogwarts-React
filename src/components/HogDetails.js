import React from 'react';

const HogDetail = (props) => {
  const { name, speciality, greased, weight: hogWeight, 'highest medal achieved': medal } = props.chosenHog;
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>{speciality}</li>
        <li>{greased ? "Greased" : "Not Greased"}</li>
        <li>{hogWeight}</li>
        <li>{medal}</li>
        <button onClick={props.closeHogDetail} >Back To Main</button>
      </ul>
    </div>
  )
}  

export default HogDetail;