import React from "react";
import { useState } from "react";
import { navbarData } from "./data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const element = navbarData.map((item) => <li>{item.link}</li>);
  return (
    <div className="navbar">
      <ul>
        <li className="nav-links">{element}</li>
      </ul>
    </div>
  );
}

export default Navbar;
