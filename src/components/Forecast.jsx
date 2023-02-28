import React from "react";

export default ({ days }) => {
  return (
    <section>
      <div className="forecast-header">
        <p>14-day forecast</p>
      </div>
      <hr />
      <div className="forecast-container">
        {days.map((item, index) => (
          <div className="forecast-card" key={index}>
            <p>{item.datetime}</p>
            <img src={`images/${item.icon}.png`} alt={item.icon}></img>
            <p className="forecast-titles">
              High:<span className="forecast-info"> {item.tempmax.toFixed()}°</span>
            </p>
            <p className="forecast-titles">
              Low:
              <span className="forecast-info"> {item.tempmin.toFixed()}°</span>
            </p>
            <p className="forecast-titles">
              Precip:<span className="forecast-info"> {item.precipprob}%</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
