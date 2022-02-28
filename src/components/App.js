import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import SortByName from "./SortByName.js";
import SortByWeight from "./SortByWeight";
import hogs from "../porkers_data";

function App() {
  const [isClicked, setIsClicked] = useState("All");
  const [sortByName, setSortByName] = useState("Unsorted");
  const [sortByWeight, setSortByWeight] = useState("Unsorted");

  function handleBtnClick(e) {
    setIsClicked(e.target.value);
  }

  function onSortNameClick(e) {
    console.log(e.target.innerText);
    setSortByName(e.target.innerText);
  }

  function onSortWeightClick(e) {
    setSortByWeight(e.target.innerText);
  }

  const filteredHogs = hogs.filter((hog) => {
    if (isClicked === "All") return true;
    return isClicked === hog.greased.toString();
  });

  return (
    <div className="App">
      <Nav />
      <Filter handleBtnClick={handleBtnClick} />
      <br></br>
      <SortByName handleClick={onSortNameClick} />
      <br></br>
      <SortByWeight handleClick={onSortWeightClick} />
      <br></br>
      <HogList
        hogs={filteredHogs}
        isClicked={isClicked}
        sortByName={sortByName}
        sortByWeight={sortByWeight}
      />
    </div>
  );
}

export default App;
