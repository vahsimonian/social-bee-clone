import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => <li>{item.link}</li>);
  return (
    <div className="navbar">
      <img src={socialBeeIcon} alt="socialBee" />
      <ul>
        <li className="nav-links">{element}</li>
      </ul>
    </div>
  );
}

export default Navbar;
