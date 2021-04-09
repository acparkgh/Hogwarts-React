import React from 'react';

const Filter = (props) => {

  return (
    <div>
      <input type="radio" name="greased" id="greased" value="greased" onChange={props.updateGreasedFilter} />
      <label htmlFor="greased">Greased</label>

      <input type="radio" name="greased" id="ungreased" value="ungreased" onChange={props.updateGreasedFilter} />
      <label htmlFor="ungreased">Ungreased</label>

      <input type="radio" name="greased" id="all" value="all" onChange={props.updateGreasedFilter} />
      <label htmlFor="all">All</label>
      
    </div>
  )

}

export default Filter;