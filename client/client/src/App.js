import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import UserLocation from "./Components/UserLocation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Rescuecenters from "./Components/Rescuecenters";
import Homepage from "./Components/Homepage";
import About from "./Components/Navbar/About";
import Connect from "./Components/Navbar/Connect";
import Map from "./Components/Map";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";

import RescueLogin from "./Components/Authentication/RescueCenter/RescueLogin";
import RescueRegister from "./Components/Authentication/RescueCenter/RescueRegister";
import UserLogin from "./Components/Authentication/User/UserLogin";
import UserRegister from "./Components/Authentication/User/UserRegister";

export default function App() {
  const optionsSet1 = ["Option A", "Option B", "Option C"];
  return (
    <Router>
      <Routes>
        <Route path="/userlocation" element={<UserLocation />} />
        <Route path="/home" element={<Map />} />
        <Route path="/rescuecenters" element={<Rescuecenters />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />

        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/user/login" element={<UserLogin />} />
        <Route path="/auth/user/register" element={<UserRegister />} />
        <Route path="/auth/rescue/login" element={<RescueLogin />} />
        <Route
          path="/auth/rescue/register"
          element={<RescueRegister options={optionsSet1} />}
        />

        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
