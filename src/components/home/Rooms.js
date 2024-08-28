import React from "react";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";

export default function Rooms() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div style={{ justifyContent: "center" }} className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img style={{ width: "100%" }} className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{getStars(item.star)}</div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3">
                        <i class="fa fa-home text-primary me-2"></i>
                        {item.area}
                      </small>
                      <small className="border-end me-3 pe-3">
                        <i class="fa fa-bed text-primary me-2"></i>
                        {item.beds}
                      </small>
                      {item.wifi && <small className="border-end me-3 pe-3">
                        <i class="fa fa-wifi text-primary me-2"></i>
                        WiFi
                      </small>}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a>
                      <a className="btn btn-sm btn-dark rounded py-2 px-4" href="/booking">
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const getStars = (stars) => {
  let content = [];
  for (let i = 0; i < stars; i++) {
    content.push(<i key={i} className="fa fa-star text-primary me-1"></i>)
  }

  return content;
}
