import React from "react";

function Filter({ handleBtnClick }) {
  return (
    <div>
      <em>Filter by Greased: </em>
      <button onClick={handleBtnClick} value={"All"}>
        All
      </button>
      <button onClick={handleBtnClick} value={true}>
        Greased
      </button>
      <button onClick={handleBtnClick} value={false}>
        Not Greased
      </button>
    </div>
  );
}

export default Filter;
