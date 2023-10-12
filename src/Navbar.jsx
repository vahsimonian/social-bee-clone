import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => <li>{item.link}</li>);
  return (
    <nav className="navbar">
      <img src={socialBeeIcon} alt="socialBee" />
      <ul>
        <li className="nav-links">{element}</li>
      </ul>
      <button>Sing Up / Login</button>
    </nav>
  );
}

export default Navbar;
