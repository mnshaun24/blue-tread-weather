import React from "react";

export default ({weather}) => {
  return (
    <div className="location-container">
      <div style={{fontSize:"45px"}}>{weather.currentConditions.conditions}</div>
    </div>
  );
};
