import React from 'react';
import Filter from './Filter';
import Sort from './Sort';

const FilterSort = (props) => {


  return (
    <div>
      <h3>FilterSortComponent</h3>
      <Filter updateGreasedFilter={props.updateGreasedFilter} />
      <Sort updateSort={props.updateSort} />
    </div>
  )

}

export default FilterSort;