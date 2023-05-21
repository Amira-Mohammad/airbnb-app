import "./App.css";
import Filter from "./components/Filter/Filter";
import FilterCriteria from "./components/Filter/FilterCriteria";
import Header from "./components/Header/Header";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Items from "./components/Items/Items";
import Sidebar from "./components/SideBar/SideBar";
import { FilterContextProvider } from "./contexts/filter-context";
import { SingleItemContextProvider } from "./contexts/single-item-context";

function App() {
  return (
    <SingleItemContextProvider>
      <FilterContextProvider>
        <div className="App">
          <Header />
          <Filter />
          <div className="d-flex">
            <Sidebar />
            <Items />
            <FilterCriteria />
            <ItemDetails />
          </div>
          <div className="madeIn fw-bold bg-white p-2 rounded shadow-sm">
            Made in Framer
          </div>
        </div>
      </FilterContextProvider>
    </SingleItemContextProvider>
  );
}

export default App;
