import React from "react";

import NavBar from "./Navbar/Navbar";
// import Map from "./Map";
import Footer from "./home_page_components/Footer";
import Gallary from "./home_page_components/Gallery";
import ImageSlider from "./home_page_components/ImageSlider";

function Homepage() {
  return (
    <>
      <NavBar />
      <div className="m-4">
        <ImageSlider />
      </div>
      <Gallary />
      <Footer />
    </>
  );
}

export default Homepage;
