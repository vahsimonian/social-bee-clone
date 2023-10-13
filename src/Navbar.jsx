import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => <li>{item.link}</li>);
  return (
    <nav className="navbar">
      <img src={socialBeeIcon} alt="socialBee" className="nav-img" />
      <ul className="nav-links">{element}</ul>
      <button className="sign-btn">Sing Up / Login</button>
    </nav>
  );
}

export default Navbar;
