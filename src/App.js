import Cities from "./components/Cities";
import TimeAndScale from "./components/TimeAndScale";
import Forecast from "./components/Forecast";
import Today from "./components/Today";
import Location from "./components/Conditions";
import getWeather from "./utils/getWeather";
import { useState, useEffect } from "react";

function App() {
  const [zip, setZip] = useState("33602");
  const [units, setUnits] = useState("us");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeather({zip, units}).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    fetchWeather();
  }, [zip, units]);

  return (
    <div className="App">
      <Cities />

      {weather && (
        <div>
      <TimeAndScale weather={weather} units={units}/>
      <Location weather={weather}/>
      <Today weather={weather} units={units}/>
      <Forecast weather={weather}/>
      </div>
      )}
    </div>
  );
}

export default App;
