import React, { useState } from "react";
import Heading from "../components/common/Heading";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Standard",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking Details:", formData);
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <div className="booking-container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">Check-In Date</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOut">Check-Out Date</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomType">Room Type</label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="Standard">Standard</option>
                <option value="Standard King">Standard King</option>
                <option value="Standard Queen">Standard Queen</option>
                <option value="Standard Twin">Standard Twin</option>
                <option value="Royal Suite">Royal Suite</option>
                <option value="DELUXE">DELUXE</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests?"
            />
          </div>

          <div className="form-group text-center">
            <button type="submit" className="booking-button">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
