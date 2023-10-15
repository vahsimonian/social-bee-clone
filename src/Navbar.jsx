import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";
import homeIcon from "./assets/home-icon.png";
import arrowDown from "./assets/down-arrow.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => (
    <div className="nav-icon-wrap">
      <li className="nav-link curs-point">
        {item.link}
        <img src={arrowDown} width={35} alt="" className="arrow-down-bold" />
      </li>
    </div>
  ));
  return (
    <nav className="navbar">
      <div>
        <img src={socialBeeIcon} alt="socialBee" className="nav-img" />
      </div>
      <div className="iva">
        <span className="curs-point">Home</span>
        {element}
        <span className="curs-point">Book a Call</span>
        <span className="curs-point">Overview</span>
      </div>
      <div>
        <button className="sign-btn">
          <span className="curs-point">Sing Up / </span>
          <span className="curs-point">Login</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
