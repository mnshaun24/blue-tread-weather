const API_KEY = "UEQG5B34YT7N6AFNBKXW94MKH";

// example call for current day
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/33602/next14days?key=UEQG5B34YT7N6AFNBKXW94MKH 


const getWeather = ({ zip, units }) => {
  const queryUrl = ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + zip + '/next14days?unitGroup=' + units + '&key=' + API_KEY);

  return fetch(queryUrl)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeather;
