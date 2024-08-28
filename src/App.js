import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./css/animate.css";
import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import GalleryPage from "./pages/GalleryPage";
import {
  AboutUs,
  Booking,
  Contact,
  Home,
  PageNotFound,
  Room,
  Services,
  Team,
  TermAndCondition,
  Testimonial,
} from "./pages/index";
export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/terms-and-conditions"
              element={<TermAndCondition />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
