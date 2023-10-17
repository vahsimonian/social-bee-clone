import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => <div id={icon.id}>{icon.icon}</div>);

  return (
    <div className="home">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;
