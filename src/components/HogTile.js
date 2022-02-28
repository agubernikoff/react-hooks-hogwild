import React, { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";

function HogTile({ name, image, specialty, weight, greased, highest }) {
  const [isClicked, setIsClicked] = useState("false");
  function handleHogsClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div className="pigTile" onClick={handleHogsClick}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h5>Click Tile to Display Additional Information</h5>
      {isClicked ? null : (
        <AdditionalInfo
          specialty={specialty}
          weight={weight}
          greased={greased}
          highest={highest}
        />
      )}
    </div>
  );
}

export default HogTile;
