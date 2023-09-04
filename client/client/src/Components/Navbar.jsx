import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [logo, setlogo] = useState();

  const logoclick = () => {};

  return (
    <div>
      <nav>
        <div className=" flex justify-between items-center h-20 px-4 absalute z-10">
          <div>
            <h1
              onClick={logoclick}
              className={
                logo
                  ? " text-pink-400 font-bold text-2xl"
                  : " text-pink-400 font-bold text-2xl"
              }
            >
              Rescue
            </h1>
          </div>

          <ul>
            <li>HOME</li>
            <li>
              <Link to={"/userlocation"}>UserLocation</Link>
            </li>
            <li>
              <Link to={"/connect"}>Connect</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact_us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
