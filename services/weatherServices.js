const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
import { DateTime } from 'luxon';


// use this function to call different API
const getWeatherData = (infoType, searchParams) => {
  const cleanedApiKey = API_KEY.replace(/"/g, ''); // Removes all quotation marks
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({...searchParams, appid:cleanedApiKey});
  return fetch(url)
  .then((res) => res.json())
};

// destructuring
const formatCurrentWeather = (data) => {
  try{
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,

    wind: {speed}
  } = data;

  const {main: details, icon} = weather[0];

  return {
    lat, lon, temp, feels_like, temp_min, temp_max, humidity,
    name, dt, country, sunrise, sunset, details, icon, speed
  }
  }catch(error){
    alert("The city you are searching for does not exist.");
  }
}

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly} = data;
  daily = daily.slice(1,6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: [d.temp.min, d.temp.max],
      icon: d.weather[0].icon,
      details: d.weather[0].description,
    }
  });
  hourly = hourly.slice(1,6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: [d.temp],
      icon: d.weather[0].icon,
    }
  });
  return {timezone, daily, hourly};
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const currentWeatherData = await getWeatherData('weather', searchParams);

    if (!currentWeatherData || currentWeatherData.cod === "404") {
      alert("The city you are searching for does not exist.");
      return null;
    }

    const formattedCurrentWeather = formatCurrentWeather(currentWeatherData);
    const { lat, lon } = formattedCurrentWeather;
    const forecastWeatherData = await getWeatherData('onecall', {
      lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
    });

    const formattedForecastWeather = formatForecastWeather(forecastWeatherData);
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    alert("An error occurred while fetching weather data.");
    return null;
  }
};


const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | 'hh:mm a") => 
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };