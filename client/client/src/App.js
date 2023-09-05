import "./App.css";
import React from "react";
import UserLocation from "./Components/UserLocation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Rescuecenters from "./Components/Rescuecenters";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Connect from "./Components/Connect";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Map from "./Components/Map";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userlocation" element={<UserLocation />} />
        <Route path="/home" element={<Map />} />
        <Route path="/rescuecenters" element={<Rescuecenters />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
