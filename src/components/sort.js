import React from 'react';

const Sort = ({ updateSort: updateSortFunction }) => {
  
  return (
    <div>
      <select onChange={ (event) => updateSortFunction(event) } >
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )

}

export default Sort;