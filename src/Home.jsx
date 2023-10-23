import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <img src={icon.icon} alt="icons" className="home-icons icons" />
  ));

  return (
    <div className="icon-container">
      <button>{icons}</button>
    </div>
  );
}

export default Home;
