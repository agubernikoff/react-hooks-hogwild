import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs, isClicked, sortByWeight, sortByName }) {
  const filteredHogs = hogs.filter((hog) => {
    if (isClicked === "All") return true;
    return isClicked === hog.greased.toString();
  });

  if (sortByWeight === "Ascending")
    filteredHogs.sort((a, b) => a.weight - b.weight);
  else if (sortByWeight === "Descending")
    filteredHogs.sort((a, b) => b.weight - a.weight);

  if (sortByName === "Z-A")
    filteredHogs.sort((a, b) => (a.name < b.name ? 1 : -1));
  else if (sortByName === "A-Z")
    return filteredHogs.sort((a, b) => (a.name < b.name ? 1 : -1));

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
