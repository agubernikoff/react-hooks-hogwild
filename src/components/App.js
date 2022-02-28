import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import Sort from "./Sort";
import hogs from "../porkers_data";

function App() {
  const [isClicked, setIsClicked] = useState("All");
  const [sortByName, setSortByName] = useState("Unsorted");
  function handleBtnClick(e) {
    setIsClicked(e.target.value);
  }
  function onSortNameClick(e) {
    setSortByName(e.target.innerText);
  }
  console.log(sortByName);

  //   function onSortWeightClick(e) {}
  return (
    <div className="App">
      <Nav />
      <Filter handleBtnClick={handleBtnClick} />
      <br></br>
      <Sort type={"Name"} handleClick={onSortNameClick} />
      <br></br>
      {/* <Sort type={"Weight"} handleClick={onSortWeightClick} /> */}
      <br></br>
      <HogList hogs={hogs} isClicked={isClicked} />
    </div>
  );
}

export default App;
