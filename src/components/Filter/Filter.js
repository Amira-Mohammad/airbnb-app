import { useContext } from "react";
import "./Filter.css";
import FilterContext from "../../contexts/filter-context";
function Filter() {
  const filterShow = useContext(FilterContext);
  return (
    <div className="FilterContainer d-flex justify-content-between align-items-center border-bottom">
      <div className="bg-light rounded d-flex align-items-center">
        <div className="rounded bg-dark text-light p-2">
          <i className="fa fa-th-large windowIcon" aria-hidden="true"></i>
        </div>
        <i className="fa fa-map-o windowIcon" aria-hidden="true"></i>
      </div>
      <div className="d-flex align-items-center">
        <select className="border-0 bg-light p-3 rounded mx-1">
          <option>AnyWhere</option>
        </select>
        <div className="bg-light p-3 rounded mx-1 ">Date</div>
        <div className="bg-light p-2 rounded mx-1 d-flex align-items-baseline">
          <button className="btn bg-white redColor fw-bold">+</button>
          <span className="mx-1">4 Guests</span>
          <button className="btn bg-white redColor fw-bold">-</button>
        </div>
      </div>
      <button className="btn" onClick={filterShow.toggleFilter}>
        <i
          className="fa fa-filter bg-light p-3 rounded text-black-50"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}

export default Filter;
