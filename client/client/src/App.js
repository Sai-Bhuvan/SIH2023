import "./App.css";
import React from "react";
import UserLocation from "./Components/UserLocation";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Rescuecenters from "./Components/Rescuecenters";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Contact_Us from "./Components/Contact_Us";
import Connect from "./Components/Connect";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userlocation" element={<UserLocation />} />
        <Route path="/rescuecenters" element={<Rescuecenters />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
