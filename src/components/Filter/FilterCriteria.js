import { useContext } from "react";
import "./FilterCriteria.css";
import FilterContext from "../../contexts/filter-context";
function FilterCriteria() {
  const filterShow = useContext(FilterContext);

  if (filterShow.showFilterCriteria) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div
        className={
          "FilterCriteria position-absolute  border-start " +
          (filterShow.showFilterCriteria
            ? "showFilterCriteria"
            : "hideFilterCriteria")
        }
      >
        <div className="criteriaItems">
          <div className="d-flex justify-content-between">
            <div className="fw-bold">Filters</div>
            <div className="redColor">Clear All</div>
          </div>
          <hr className="text-muted" />
          <div>
            <div className="fw-bold">Price range</div>
            <div className="text-muted">The average nightly price is $133</div>
            <div className="d-flex my-2">
              <div className="mx-1">
                <label className="text-muted">Max Price</label>
                <input className="form-control" />
              </div>
              <div>
                <label className="text-muted"> Max Price</label>
                <input className="form-control" />
              </div>
            </div>
          </div>
          <hr className="text-muted" />
          <div>
            <div className="fw-bold my-3">Type of place</div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="EntirePlace"
              />
              <div className="d-flex flex-column">
                <label className="form-check-label" htmlFor="EntirePlace">
                  Entire Place
                </label>
                <label className="form-check-label text-muted">
                  A place all to yourself
                </label>
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="PrivateRoom"
              />
              <div className="d-flex flex-column">
                <label className="form-check-label" htmlFor="PrivateRoom">
                  Private room
                </label>
                <label className="form-check-label text-muted">
                  Your own room in a home or a hotel, plus some shared common
                  spaces.
                </label>
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="SharedRoom"
              />
              <div className="d-flex flex-column">
                <label className="form-check-label" htmlFor="SharedRoom">
                  Shared room
                </label>
                <label className="form-check-label text-muted">
                  A sleeping space and common areas that may be shared with
                  others.
                </label>
              </div>
            </div>
          </div>
          <hr className="text-muted" />
          <div>
            <div className="fw-bold">Rooms, beds, and baths</div>
            <div className="my-3">
              <div>Bedrooms</div>
              <div className="d-flex justify-content-between my-2">
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2 bg-black text-bg-primary">
                  Any
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  1
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  2
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  3
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  4
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  +5
                </div>
              </div>
            </div>

            <div className="my-3">
              <div>Beds</div>
              <div className="d-flex justify-content-between my-2">
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2 bg-black text-bg-primary">
                  Any
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  1
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  2
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  3
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  4
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  +5
                </div>
              </div>
            </div>

            <div className="my-3">
              <div>Bathrooms</div>
              <div className="d-flex justify-content-between my-2">
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2 bg-black text-bg-primary">
                  Any
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  1
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  2
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  3
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  4
                </div>
                <div className="count border rounded-4 border d-flex justify-content-center align-items-center px-2">
                  +5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submitSearch border-top p-4">
          <button disabled className="w-100 bg-danger btn text-bg-danger">
            Show 836 Homes
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterCriteria;
