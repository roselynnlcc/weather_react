const API_KEY = process.env.NEXT_PUBLIC_WEATHERAPI_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

console.log(API_KEY);
console.log(BASE_URL);

// 1. Get CurrentWeather
async function fetchCurrentWeather(location, units) {
  console.log(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
  );
  const data = await response.json();
  console.log("current", data);


  if (data.error) {
    throw new Error(
      data.error.message || "Failed to fetch current weather data"
    );
  }

  const { current, location: loc } = data;

  return {
    city: loc.name,
    region: loc.region,
    country: loc.country,
    temperature: units === "metric" ? current.temp_c : current.temp_f,
    feels_like: units === "metric" ? current.feelslike_c : current.feelslike_f,
    condition: current.condition.text,
    icon: current.condition.icon,
    speed: current.wind_kph,
    humidity: current.humidity,
    lastUpdated: current.last_updated,
    localTime: loc.localtime_epoch,
  };
}

// 2. Get ForecastWeather
async function fetchForecastWeather(location, units, days, hours) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`
  );
  const data = await response.json();
  console.log("forecast data", data);

  if (data.error) {
    throw new Error(
      data.error.message || "Failed to fetch forecast weather data"
    );
  }

  const { forecast, location: loc } = data;

  const currentTimeEpoch = loc.localtime_epoch;

  const nextDayHourly = forecast.forecastday[1]?.hour || [];

  const combinedHours = [...forecast.forecastday[0].hour, ...nextDayHourly];

  // Filter for the next 'hours' based on EPOCH times
  const filteredHours = combinedHours.filter((hour) => {
    return (
      hour.time_epoch > currentTimeEpoch &&
      hour.time_epoch <= currentTimeEpoch + hours * 3600
    );
  });

  return {
    daily: forecast.forecastday.map((day) => ({
      date: day.date,
      temperature: {
        max: units === "metric" ? day.day.maxtemp_c : day.day.maxtemp_f,
        min: units === "metric" ? day.day.mintemp_c : day.day.mintemp_c,
      },
      condition: day.day.condition.text,
      icon: day.day.condition.icon,
    })),
    hourly: filteredHours.map((hour) => ({
      time: hour.time,
      temperature: hour.temp_c,
      condition: hour.condition.text,
      icon: hour.condition.icon,
    })),
  };
}

// 3. getFormattedWeatherData
async function getFormattedWeatherData({ q, units, days = 4, hours = 5 }) {
  try {
    console.log("getFormattedWeatherData");
    console.log("q", q);
    console.log("units", units);
    console.log("days", days);
    console.log("hours", hours);
    const [currentWeather, forecastWeather] = await Promise.all([
      fetchCurrentWeather(q, units),
      fetchForecastWeather(q, units, days, hours),
    ]);
    
    return { ...currentWeather, ...forecastWeather };
  } catch (error) {
    console.error("Error in getFormattedWeatherData:", error.message);
    throw error;
  }
}

export default getFormattedWeatherData;