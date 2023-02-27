import React from "react";

export default () => {
  return (
    <section>
      <div className="forecast-header">
        <p>7-day forecast</p>
      </div>
      <hr />
      <div className="forecast-container">
        <p>DATE</p>
        <p>Weather Image</p>
        <p>
          Hi:<span>10</span> / Low:<span>0</span>
        </p>
        <p>
          Percip Chance:<span>50</span>
        </p>
      </div>
      <div className="forecast-header">
        <p>14-day forecast</p>
      </div>
      <hr />
      <div className="forecast-container">
        <p>DATE</p>
        <p>Weather Image</p>
        <p>
          Hi:<span>10</span> / Low:<span>0</span>
        </p>
        <p>
          Percip Chance:<span>50</span>
        </p>
      </div>
    </section>
  );
};
