import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";
import homeIcon from "./assets/home-icon.png";
import arrowDown from "./assets/down-arrow.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const arrowToggle = isOpen ? "right" : "down";

  const element = navbarData.map((item) => (
    <div className="nav-icon-wrap">
      <li className="nav-link curs-point nav-hover">
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
        <span className="curs-point home-icon nav-hover">
          <img src={homeIcon} alt="home" width={15} />
          Home
        </span>
        {element}
        <span className="curs-point nav-hover">Book a Call</span>
        <span className="curs-point nav-hover">Overview</span>
      </div>
      <button className="sign-btn">
        <span className="curs-point">Sing Up / </span>
        <span className="curs-point">Login</span>
      </button>
    </nav>
  );
}

export default Navbar;
