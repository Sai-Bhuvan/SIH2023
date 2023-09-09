import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
// import UserLocation from "./Components/UserLocation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Rescuecenters from "./Components/Rescuecenters";
import Homepage from "./Components/Homepage";
import About from "./Components/Navbar/About";
import Connect from "./Components/Navbar/Connect";
import Map from "./Components/Map";
export default function App() {
  const optionsSet1 = ["Option A", "Option B", "Option C"];
  return (
    <Router>
      <Routes>
        {/* <Route path="/userlocation" element={<UserLocation />} /> */}
        <Route path="/home" element={<Map />} />
        {/* <Route path="/rescuecenters" element={<Rescuecenters />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
