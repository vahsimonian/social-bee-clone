import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <img className="home-icons" src={icon.icon} alt="iocns" />
  ));

  return (
    <div>
      <button className="icon-container">{icons}</button>
    </div>
  );
}

export default Home;
