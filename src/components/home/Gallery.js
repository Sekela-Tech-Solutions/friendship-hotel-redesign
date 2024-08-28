import React from "react";
import "../../css/gallery.css";
import { images } from "../data/Data";

export default function Gallery() {
  return (
    <div className="container grid-container">
      {images.map((item, index) => {
        return (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        );
      })}
    </div>
  );
}
