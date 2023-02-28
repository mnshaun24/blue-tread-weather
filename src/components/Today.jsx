import React from "react";
import { UilCloudShowers } from '@iconscout/react-unicons';
import { UilDesert } from '@iconscout/react-unicons';
import { UilWind } from '@iconscout/react-unicons';


export default ({weather, units}) => {

  return (
    <section className="section-today">
      <img src={`images/${weather.currentConditions.icon}.png`} alt={weather.currentConditions.icon}></img>
      <div style={{fontSize: "48px"}}>{weather.currentConditions.temp.toFixed()}°</div>
      <div className="today-weather-container">
        <div className="today-weather-div">
          <UilCloudShowers size="30" />    Chance: <span>{weather.currentConditions.precipprob}%</span>
        </div>
        <div className="today-weather-div">
          <UilDesert size="30" />    Humidity:<span>{weather.currentConditions.humidity}</span>
        </div>
        <div className="today-weather-div">
          <UilWind size="30" />    Wind: <span>{weather.currentConditions.windspeed} {units === "us" && "mph"} {units === "metric" && "km/h"}</span>
        </div>
      </div>
    </section>
  );
};
