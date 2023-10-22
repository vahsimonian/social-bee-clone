import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <div className="home-icons">
      <img src={icon.icon} alt="icons" className="icons" />
    </div>
  ));

  return (
    <div className="icon-container">
      <button>{icons}</button>
    </div>
  );
}

export default Home;
