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
      await getWeather({ zip, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [zip, units]);

  return (
    <div className="App">
      <Cities setZip={setZip} />

      {weather && (
        <div>
          <TimeAndScale weather={weather} units={units} setUnits={setUnits} />
          <Location weather={weather} />
          <Today weather={weather} units={units} />
          <Forecast days={weather.days} />
        </div>
      )}
    </div>
  );
}

export default App;
