import React from "react";

function Sort({ type, handleClick }) {
  return (
    <div>
      Sort by {type}:<button onClick={handleClick}>Unsorted</button>
      <button onClick={handleClick}>Ascending</button>
      <button onClick={handleClick}>Descending</button>
    </div>
  );
}

export default Sort;
