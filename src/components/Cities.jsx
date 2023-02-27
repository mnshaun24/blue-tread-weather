import React from "react";

export default () => {
  const cities = [
    {
      key: 1,
      name: "Reno, NV",
    },
    {
      key: 2,
      name: "Austin, TX",
    },
    {
      key: 3,
      name: "Tampa, FL",
    },
  ];

  return (
    <div className="btn-cities-container">
      {cities.map((city) => (
        <button className="btn-cities" key={city.key}>{city.name}</button>
      ))}
    </div>
  );
};
