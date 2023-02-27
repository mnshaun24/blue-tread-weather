import Cities from "./components/Cities";
import TimeAndScale from "./components/TimeAndScale";
import Forecast from "./components/Forecast";
import Today from "./components/Today";
import Location from "./components/Location";
import getFormattedWeather from "./utils/getWeather.js";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeather({ q: "Reno" });
  };

  fetchWeather();

  return (
    <div className="App">
      <Cities />
      <TimeAndScale />
      <Location />
      <Today />
      <Forecast />
    </div>
  );
}

export default App;
