import React from "react";
import { UilCloudShowers } from '@iconscout/react-unicons';
import { UilDesert } from '@iconscout/react-unicons';
import { UilWind } from '@iconscout/react-unicons'

export default () => {
  return (
    <section className="section-today">
      <div>an image that corresponds to the weather on left</div>
      <div>Displays current temp of location in center</div>
      <div className="today-weather-container">
        <div className="today-weather-div">
          <UilCloudShowers size="30" />Chance: <span>100</span>
        </div>
        <div className="today-weather-div">
          <UilDesert size="30" />Humidity: <span>100</span>
        </div>
        <div className="today-weather-div">
          <UilWind size="30" />Wind: <span>100</span>
        </div>
      </div>
    </section>
  );
};
