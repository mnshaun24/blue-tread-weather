import React from "react";

export default ({ weather, units, setUnits }) => {
  const location = weather.address;

  const handleUnitChange = (x) => {
    const selectedUnit = x.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <section className="time-scale-container">
      <div className="info-time">
        {location === "33602" && <p>Weather for Tampa</p>}
        {location === "73301" && <p>Weather for Austin</p>}
        {location === "89433" && <p>Weather for Reno</p>}
      </div>
      <div className="btn-degree-container">
        <button onClick={handleUnitChange} name="us" className="btn-degree">
          {"\u2109"}
        </button>
        <span style={{ fontSize: "20px" }}>|</span>
        <button onClick={handleUnitChange} name="metric" className="btn-degree">
          {"\u2103"}
        </button>
      </div>
    </section>
  );
};
