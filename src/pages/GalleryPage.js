import React from "react";
import Heading from "../components/common/Heading";
import Gallery from "../components/home/Gallery";

export default function GalleryPage() {
  return (
    <>
      <Heading heading="Gallery" title="Home" subtitle="Gallery" />
      <Gallery />
    </>
  );
}
