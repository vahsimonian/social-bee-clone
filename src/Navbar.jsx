import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => (
    <div className="nav-icon-link">
      <li className="nav-link">
        <img src={item.arrowDown} width={25} />
        {item.link}
      </li>
    </div>
  ));
  return (
    <nav className="navbar">
      <div>
        <img src={socialBeeIcon} alt="socialBee" className="nav-img" />
      </div>
      <div className="iva">{element}</div>
      <div>
        <button className="sign-btn">Sing Up / Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
