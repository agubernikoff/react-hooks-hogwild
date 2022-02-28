import React from "react";

function SortByWeight({ handleClick }) {
  return (
    <div>
      Sort by Weight:<button onClick={handleClick}>Unsorted</button>
      <button onClick={handleClick}>Ascending</button>
      <button onClick={handleClick}>Descending</button>
    </div>
  );
}

export default SortByWeight;
