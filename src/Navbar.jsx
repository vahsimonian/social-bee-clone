import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";
import homeIcon from "./assets/home-icon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => (
    <div className="nav-icon-wrap">
      <li className="nav-link curs-point">
        <img src={item.arrowDown} width={25} alt="" />
        {item.link}
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
      </div>
      <span className="curs-point">Overview</span>
      <span className="curs-point">Book a Call</span>
      <div>
        <button className="sign-btn">
          <span className="curs-point">Sing Up /</span>
          <span className="curs-point">Login</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
