import React from "react";
import { useState } from "react";
import { navbarData } from "./data";

function Navbar() {
  const element = navbarData.map((item) => <li>{item.link}</li>);
  return (
    <div className="navbar">
      <ul>{element}</ul>
    </div>
  );
}

export default Navbar;
