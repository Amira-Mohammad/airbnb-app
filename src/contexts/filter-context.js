import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterContextProvider(props) {
  const [FilterCriteria, setFilterCriteria] = useState(false);

  function toggleFilterHandler() {
    window.scrollTo(0, 0);
    setFilterCriteria(!FilterCriteria);
  }

  const context = {
    showFilterCriteria: FilterCriteria,
    toggleFilter: toggleFilterHandler,
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
