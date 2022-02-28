import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs, isClicked }) {
  const filteredHogs = hogs.filter((hog) => {
    if (isClicked === "All") return true;
    return isClicked === hog.greased.toString();
  });
  const hogTiles = filteredHogs.map((hog) => (
    <HogTile
      key={hog.name}
      name={hog.name}
      image={hog.image}
      specialty={hog.specialty}
      weight={hog.weight}
      greased={hog.greased}
      highest={hog["highest medal achieved"]}
    />
  ));
  return <div>{hogTiles}</div>;
}

export default HogList;
