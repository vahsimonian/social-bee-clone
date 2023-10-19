import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <img className="home-icons" src={icon.icon} alt="iocns" />
  ));

  return (
    <div className="home">
      <div className="icon-container">{icons}</div>
    </div>
  );
}

export default Home;
