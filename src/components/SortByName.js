import React from "react";

function SortByName({ handleClick }) {
  return (
    <div>
      SortByNameSort by Name:
      <button onClick={handleClick}>Unsorted</button>
      <button onClick={handleClick}>A-Z</button>
      <button onClick={handleClick}>Z-A</button>
    </div>
  );
}

export default SortByName;
