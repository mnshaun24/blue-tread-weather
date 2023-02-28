import React from "react";

export default ({ setZip }) => {
  const cities = [
    {
      key: 1,
      name: "Reno, NV",
      zip: "89433",
    },
    {
      key: 2,
      name: "Austin, TX",
      zip: "73301",
    },
    {
      key: 3,
      name: "Tampa, FL",
      zip: "33602",
    },
  ];

  return (
    <div className="btn-cities-container">
      {cities.map((city) => (
        <button
          onClick={() => setZip(city.zip)}
          className="btn-cities"
          key={city.key}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};
