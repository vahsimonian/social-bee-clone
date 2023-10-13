import React from "react";
import { useState } from "react";
import { navbarData } from "./data";
import socialBeeIcon from "../src/assets/socialbee-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => <a>{item.link}</a>);
  return (
    <nav className="navbar">
      <img src={socialBeeIcon} alt="socialBee" className="nav-img" />
      <div className="nav-links">{element}</div>
      <button className="sign-btn">Sing Up / Login</button>
    </nav>
  );
}

export default Navbar;
