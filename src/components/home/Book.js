import React from "react";

export default function Book() {
  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Check in"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date" id="date2" data-target-input="nearest">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Check out"
                        data-target="#date2"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Room Type</option>
                      <option value="Amenities">Amenities</option>
                      <option value="Standard King">Standard King</option>
                      <option value="Standard Queen">Standard Queen</option>
                      <option value="Standard Twin">Standard Twin</option>
                      <option value="Royal Suite">Royal Suite</option>
                      <option value="DELUXE">DELUXE</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Adult</option>
                      <option value="1">Adult 1</option>
                      <option value="2">Adult 2</option>
                      <option value="3">Adult 3</option>
                    </select>
                  </div>
              
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
