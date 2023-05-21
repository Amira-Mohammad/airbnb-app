import Diamond from "../../Icons/Diamond";
import FreeCancelation from "../../Icons/FreeCancelation";
import Guests from "../../Icons/Guests";
import SelfCheckIn from "../../Icons/SelfCheckIn";
import Super from "../../Icons/Super";
import WorkSpace from "../../Icons/WorkSpace";
import LocationMap from "../Map/Map";
import SelectedItemContext from "../../contexts/single-item-context";
import profilePic from "../../images/profilePic.webp";
import "./ItemDetails.css";
import { useContext } from "react";
function ItemDetails() {
  const showSelectedItemContext = useContext(SelectedItemContext);

  if (showSelectedItemContext.showSingleItem) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div
        className={
          "overlay " +
          (showSelectedItemContext.showSingleItem
            ? "showDetails"
            : "HideDetails")
        }
        style={{ display: "flex" }}
      >
        <div className="p-2 closeBtnContainer" style={{ width: "10%" }}>
          <div className="  close text-end p-2  ">
            <button
              onClick={showSelectedItemContext.toggleSingleItem}
              className="closeBtn rounded-circle"
            >
              x
            </button>
          </div>
        </div>
        <div
          style={{ width: "90%", height: "100vh" }}
          className="bg-white hiddenScroll p-4 overflow-auto"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 position-relative ">
                <img
                  src="https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp"
                  className="w-100 h-100 rounded-4 my-2"
                />
                <div className="seeAll position-absolute bg-white p-1 rounded-3">
                  See All Photos
                </div>
              </div>

              <div className="col-6 ">
                <div className="secondImg h-50 rounded-4 my-2"></div>
                <div className="thirdImg h-50 rounded-4 my-2"></div>
              </div>

              <div className="col-6 bg-white my-5 ">
                <div className="border d-inline-flex py-1 px-2 rounded-3">
                  <div className="mx-1">
                    <Super />
                  </div>
                  <div className="mx-1">Superhost</div>
                </div>
                <div className="d-flex my-2">
                  <div className="icon bgGray p-2  rounded-circle text-center">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <div className="icon bgGray p-2 mx-2 rounded-circle text-center">
                    <i class="fa fa-upload " aria-hidden="true"></i>
                  </div>
                </div>
                <div className="fs-6 my-1">Whitefish Estate</div>
                <div className="text-muted my-1">
                  Whitefish, Montana, United States
                </div>
                <div className="my-4">
                  <div className="d-flex my-3">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">16+ guests</div>
                  </div>

                  <div className="d-flex my-3">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">8 bedrooms</div>
                  </div>

                  <div className="d-flex my-3">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">8 beds</div>
                  </div>

                  <div className="d-flex my-3">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">8 baths</div>
                  </div>
                  <hr className="text-muted my-5" />
                  <div className="my-4">
                    <WorkSpace />
                  </div>
                  <div className="text-black fs-6">Dedicated workspace</div>
                  <div className="text-muted">
                    A private room with wifi that’s well-suited for working.
                  </div>

                  <div className="my-4">
                    <SelfCheckIn />
                  </div>
                  <div className="text-black fs-6">Self check-in</div>
                  <div className="text-muted">
                    Check yourself in with the keypad.
                  </div>

                  <div className="my-4">
                    <FreeCancelation />
                  </div>
                  <div className="text-black fs-6">
                    Free cancellation before Jul 25
                  </div>
                  <div className="text-muted">
                    A private room with wifi that’s well-suited for working.
                  </div>

                  <hr className="text-muted my-5" />
                  <p className="fs-5 fw-bold">About this space</p>
                  <p className="text-muted">
                    Enjoy a quiet getaway in this charming cottage renovated,
                    designed, and owned by Chip and Joanna Gaines. Originally
                    the carriage house for Hillcrest Estate, this home includes
                    one bedroom, one bath, an office nook and a private back
                    patio. This makes it the perfect getaway for a party of two,
                    or if you’re stopping through town and need a restful place
                    to retreat.
                  </p>
                  <p className="fs-5 text-black">The space</p>
                  <p>
                    An open living, dining, and kitchen area provide ample room
                    in this cozy cottage. French double doors lead you out to
                    the back patio to enjoy your own private outdoor space. A
                    dedicated, covered parking spot for your use. The parking
                    lot is shared with Hillcrest Estate guests.
                  </p>
                  <button className="bg-transparent border-0 fw-bold text-danger">
                    Read more
                  </button>

                  <hr className="text-muted my-5" />

                  <p className="fs-5 fw-bold">What this place offers</p>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Kitchen</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Dedicated workspaces</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">55” 4k TV</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Free dryer - in unit</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Private patio or balcony</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Wifi</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">1 parking space</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Centrail air conditioning</div>
                  </div>

                  <div className="d-flex my-4">
                    <div>
                      <Guests />
                    </div>
                    <div className="mx-3">Centrail air conditioning</div>
                  </div>
                </div>

                <button className="bg-transparent border-0 fw-bold text-danger">
                  View more
                </button>
                <hr className="text-muted my-5" />

                <div className="d-flex justify-content-between">
                  <div className="fs-5 fw-bold ">Reviews</div>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>5.0 — 124 reviews</span>
                  </div>
                </div>
                <div className="border rounded-4 p-3 my-3">
                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Cleanliness</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "50%" }}
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">5.0</div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Accuracy</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "25%" }}
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">25.0</div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Communication</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "75%" }}
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">75.0</div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Location</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "40%" }}
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">40.0</div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Check-in</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "80%" }}
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">80.0</div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <label className=" label ">Value</label>
                    <div class="progress my-2 mx-1">
                      <div
                        class="progress-bar"
                        style={{ width: "42%" }}
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="w-25">42.0</div>
                  </div>
                </div>

                <div className="border rounded-4 p-3 my-3">
                  <div className="my-2 d-flex">
                    <img
                      src={profilePic}
                      width={60}
                      height={60}
                      className="rounded-circle profilePic"
                    />
                    <div className="mx-3">
                      <div className="fw-semibold">Steve</div>
                      <div className="text-muted">March 2023</div>
                    </div>
                  </div>
                  <p className="text-muted">
                    Abbe's place was so wonderful and just what I needed. It was
                    the perfect escape with a great wood stove, beautiful views,
                    horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>
                <div className="border rounded-4 p-3 my-3">
                  <div className="my-2 d-flex">
                    <img
                      src={profilePic}
                      width={60}
                      height={60}
                      className="rounded-circle profilePic"
                    />
                    <div className="mx-3">
                      <div className="fw-semibold">Daniel</div>
                      <div className="text-muted">July 2022</div>
                    </div>
                  </div>
                  <p className="text-muted">
                    Abbe's place was so wonderful and just what I needed. It was
                    the perfect escape with a great wood stove, beautiful views,
                    horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>
                <div className="border rounded-4 p-3 my-3">
                  <div className="my-2 d-flex">
                    <img
                      src={profilePic}
                      width={60}
                      height={60}
                      className="rounded-circle profilePic"
                    />
                    <div className="mx-3">
                      <div className="fw-semibold">Jackson</div>
                      <div className="text-muted">April 2021</div>
                    </div>
                  </div>
                  <p className="text-muted">
                    Abbe's place was so wonderful and just what I needed. It was
                    the perfect escape with a great wood stove, beautiful views,
                    horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>

                <button className="bg-transparent border-0 fw-bold text-danger">
                  View more
                </button>
                <hr className="text-muted my-5" />

                <p className="fs-5 fw-bold my-4">Where you'll be</p>
                <div className="mapSection border rounded-4 ">
                  <LocationMap />
                </div>

                <p className="fs-5 text-black my-2">
                  Whitefish, Montana, United States
                </p>
                <p className="text-muted">
                  The property, given its close proximity to the refreshing
                  hillside town of Tagaytay and clear blue beaches of Nasugbu,
                  provides a quick escape from the hustle and bustle of city
                  life.
                </p>
                <button className="bg-transparent border-0 fw-bold text-danger">
                  View more
                </button>

                <hr className="text-muted my-5" />
                <p className="fs-5 fw-bold my-4">Host</p>
                <div className="my-2">
                  <img
                    src={profilePic}
                    width={60}
                    height={60}
                    className="rounded-circle profilePic"
                  />
                </div>
                <div>Hosted by Brenda</div>
                <div className="text-muted">Joined in August 2014</div>
                <div className="my-4">
                  <button className="btn border border-dark w-100">
                    Contact Host
                  </button>
                </div>
                <div className="d-flex">
                  <div>
                    <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span className="px-2">2,635 reviews</span>
                  </div>
                  <div className="mx-4">
                    <span>
                      <i class="fa fa-square-o" aria-hidden="true"></i>
                    </span>
                    <span className="px-2">Identity verified</span>
                  </div>
                  <div className="mx-4">
                    <span>
                      <Super />
                    </span>
                    <span className="px-2">Superhost</span>
                  </div>
                </div>

                <p className="text-muted my-3">
                  As a mother of 4, living in Solana Beach for 25+ years, I love
                  to help families enjoy our beautiful area. Vacations are
                  special and we do our very best to make them affordable,
                  enjoy…
                </p>

                <button className="bg-transparent border-0 fw-bold text-danger">
                  View more
                </button>
              </div>

              <div className="checkIn col-6 bg-white my-5 ">
                <div className="bgGray rounded-4 border p-3">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <span className="fw-bold mx-2">1500</span>
                      /night
                    </div>
                    <div>
                      <i className="fa fa-star mx-2" aria-hidden="true"></i>
                      <span>5</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3 ">
                    <div className="d-flex flex-column">
                      <label className="text-muted">Check In</label>
                      <input className="form-control w-100" />
                    </div>

                    <div className="d-flex flex-column">
                      <label className="text-muted">Check out</label>
                      <input className="form-control w-100" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="text-muted">Guests</label>
                      <select className="form-control w-100"></select>
                    </div>
                  </div>
                  <hr className="text-muted my-4" />
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <span>
                        6 nights
                        <i
                          class="fa fa-info-circle mx-1 text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span>$2100</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>
                        Cleaning fee
                        <i
                          class="fa fa-info-circle mx-1 text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span>$85</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>
                        Airbnb service fee
                        <i
                          class="fa fa-info-circle mx-1 text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span>$100</span>
                    </div>

                    <hr className="text-muted my-4" />

                    <div className="d-flex justify-content-between">
                      <span className="d-flex flex-column">
                        <span className="fw-bold">Total</span>
                        <span className="text-muted">Before taxes</span>
                      </span>
                      <span>$2180</span>
                    </div>
                    <button className="btn btn-danger rounded-3 p-2 my-3">
                      Reserve
                    </button>
                  </div>
                </div>
                <div className="rareFind my-3 rounded-4 border p-3 d-flex">
                  <div>
                    <Diamond />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold">This is a rare find</div>
                    <div className="text-muted">
                      Kathryn's place on Airbnb is usually fully booked.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
