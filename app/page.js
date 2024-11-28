"use client";
import React, { useEffect, useState, useCallback } from "react";
import TopButton from "@/components/TopButton";
import Inputs from "@/components/Inputs";
import TimeAndLocation from "@/components/TimeAndLocation";
import TemperatureAndDetails from "@/components/TemperatureAndDetails";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";
import getFormattedWeatherData from "@/services/weatherServices";
import { getBackgroundImage } from "../utils/backgroundHelpers";

export default function Home() {
  const [query, setQuery] = useState("calgary");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const initialCities = ["Calgary", "Hong Kong", "London", "Sydney"];
  const [cities, setCities] = useState(initialCities);
  const [isNewSearch, setIsNewSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const tempSymbol = units === "metric" ? "°C" : "°F";
  const windSpeedSymbol = units === "metric" ? "km/h" : "mph";

  const addCity = useCallback(
    (newCity) => {
      setCities((prevCities) => {
        if (!prevCities.includes(newCity) && weather) {
          return [...prevCities, newCity];
        }
        return prevCities;
      });
    },
    [weather]
  );

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      const MAX_CITY_NUMBER = 8;
      try {
        console.log(query);
        console.log(units);
        const data = await getFormattedWeatherData({ ...query, units });
        console.log(data);
        // Only update weather state if valid data is returned
        if (data) {
          setWeather(data);
          if (
            isNewSearch &&
            !cities.includes(query.q) &&
            cities.length < MAX_CITY_NUMBER
          ) {
            const addCityPrompt = window.confirm(
              `Would you like to add ${query.q} to your panel?`
            );
            if (addCityPrompt) {
              addCity(query.q);
            }
          }
          setIsNewSearch(false);
        }

        setIsLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setIsLoading(false); // Stop loading in case of error
      }
    };

    fetchWeather();
  }, [query, units, isNewSearch]);

  // Loading page content
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-sky-200 via-blue-200 to-green-100">
        <div className="flex flex-col justify-center items-center p-4 w-60 h-60 bg-white bg-opacity-90 rounded-full shadow-xl border-2 border-dotted border-sky-600">
          <div className="text-center ">
            <p className="text-4xl p-1 font-semibold text-sky-500">Ghibli</p>
            <p className="text-3xl p-1 font-semibold text-sky-400">Meteo</p>
          </div>
        </div>
        <p className="animate-pulse text-lg font-medium mt-4 text-white text-center">
          Loading ...
        </p>
      </div>
    );
  }

  const updateQuery = (newQuery, newSearch = false) => {
    // Check if the city is already in the list
    if (!cities.includes(newQuery.q)) {
      setQuery(newQuery);
      setIsNewSearch(newSearch);
    } else {
      setQuery(newQuery);
    }
  };

  // Determine the current time
  const currentTime = weather
    ? new Date().getTime() / 1000 // Use current time if weather data is loaded
    : 24 * 60 * 60; // Use end of day as placeholder if weather data is not loaded

  // Determine the background image to use
  const backgroundImage = weather
    ? getBackgroundImage(weather.sunrise, weather.sunset, currentTime)
    : "/images/day/chihiro020.jpg";

  return (
    <div
      className="mx-auto py-4 px-4 md:py-6 md:px-20"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
      }}
    >
      {/* Top row for buttons and inputs */}
      <TopButton
        setQuery={setQuery}
        cities={cities}
        updateQuery={updateQuery}
      />

      <Inputs
        setQuery={setQuery}
        units={units}
        setUnits={setUnits}
        cities={cities}
        updateQuery={updateQuery}
        weather={weather}
      />
      {/* Main content area */}
      <div className="lg:flex lg:flex-row lg:mt-10 lg:mb-20">
        {/* Current Weather area */}
        <div className="lg:w-2/5 lg:mr-4 bg-violet-100 bg-opacity-60 rounded-md">
          {isLoading}
          {weather && (
            <div>
              <TimeAndLocation weather={weather} />

              <TemperatureAndDetails
                weather={weather}
                tempSymbol={tempSymbol}
                windSpeedSymbol={windSpeedSymbol}
              />
            </div>
          )}
        </div>
        {/* Forecast area */}
        <div className="lg:w-3/5 bg-violet-100 bg-opacity-60 lg:p-4 rounded-md mt-4 lg:mt-0 pb-4">
          {weather && (
            <>
              <Forecast
                title="hourly forecast"
                items={weather.hourly.map((hour) => ({
                  time: new Date(hour.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  temperature: hour.temperature,
                  condition: hour.condition,
                  icon: hour.icon,
                }))}
                tempSymbol={tempSymbol}
              />
              <Forecast
                title="daily forecast"
                items={weather.daily.map((day) => ({
                  date: new Date(day.date).toLocaleDateString([], {
                    weekday: "long",
                  }), // "Tuesday"
                  temperature: {
                    max: day.temperature.max,
                    min: day.temperature.min,
                  },
                  condition: day.condition,
                  icon: day.icon,
                }))}
                tempSymbol={tempSymbol}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
