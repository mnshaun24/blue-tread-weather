const API_KEY = "e190a9609f5841a19b3221928232702";
const BASE_URL = "https://api.weatherapi.com/v1";

// example call for current day
// https://api.weatherapi.com/v1/current.json?key=e190a9609f5841a19b3221928232702&q=Reno, NV&aqi=no

// example call for 14 day
// https://api.weatherapi.com/v1/forecast.json?key=e190a9609f5841a19b3221928232702&q=Reno, NV&days=14&aqi=no&alerts=no

const getWeather = (info, params) => {
  const queryUrl = new URL(BASE_URL + "/" + info);
  queryUrl.search = new URLSearchParams({ key: API_KEY, ...params, });

  return fetch(queryUrl)
    .then((res) => res.json())
};

const destructureWeatherData = (data) => {
  const {
    location: {name, lat, lon},
    current: {temp_c, temp_f, wind_mph, wind_kph, humidity, condition},
    forecast
  } = data

  const {date, day} = forecast[0];

  return {name, lat, lon, temp_c, temp_f, wind_mph, wind_kph, humidity, condition, date, day}
}

 const getFormattedWeather = async (params) => {
  const formattedCurrentWeather = await getWeather("/forecast.json", params)
  .then(destructureWeatherData)

  return formattedCurrentWeather
 }

 export default getFormattedWeather;