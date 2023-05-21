import { createContext, useState } from "react";

const SelectedItemContext = createContext();

export function SingleItemContextProvider(props) {
  const [SingleItem, setSingleItem] = useState(false);

  function toggleSingleItem() {
    window.scrollTo(0, 0);
    setSingleItem(!SingleItem);
  }

  const context = {
    showSingleItem: SingleItem,
    toggleSingleItem: toggleSingleItem,
  };

  return (
    <SelectedItemContext.Provider value={context}>
      {props.children}
    </SelectedItemContext.Provider>
  );
}

export default SelectedItemContext;
