import React from "react";

function AdditionalInfo({ specialty, weight, greased, highest }) {
  return (
    <>
      <h3>Specialty: {specialty}</h3>
      <h3>Weight: {weight} lbs</h3>
      <h3>Greased? {greased.toString()}</h3>
      <h3>Highest Medal Achieved: {highest}</h3>
    </>
  );
}

export default AdditionalInfo;
